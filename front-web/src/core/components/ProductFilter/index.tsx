import { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import ReactSelect from 'react-select';
import { ReactComponent as SearchIcon } from '../../../core/assets/images/arrow-search.svg'
import { Category } from '../../../types/category';
import { requestBackend } from '../../../util/requests';


import './styles.scss'

type ProductFilterData = {
    name: string,
    category: Category | null
}



export default function ProductFilter() {

    const { register, handleSubmit, setValue, getValues, control } = useForm<ProductFilterData>();
    const [selectCategories, setSelectCategories] = useState<Category[]>([]);


    const onSubmit = (formData: ProductFilterData) => {

        console.log("ENVIOU ", formData);
    };

    const handleFormClear = () => {
        setValue('name', '')
        setValue('category', null)
    }

    const handleChangeCategory = (value : Category) => {
        setValue('category', value);

        const obj : ProductFilterData = {
            name: getValues('name'),
            category: getValues('category')
        }
        console.log("ENVIOU ", obj);

    }

    useEffect(() => {
        requestBackend({ url: '/categories' })
            .then(response => {
                setSelectCategories(response.data.content);
            })
    }, [])


    return (

        <div className="card-base product-filter-container">
            <form className="product-filter-form" onSubmit={handleSubmit(onSubmit)}>
                <div className="product-filter-name-container">
                    <input
                        {...register("name")}
                        type="text"
                        className="form-control"
                        placeholder="Nome do produto"
                        name="name"
                    />
                    <button className="product-filter-search-icon" >
                        <SearchIcon />
                    </button>
                </div>

                <div className="product-filter-bottom-container">
                    <div className="product-filter-category-container">
                        <Controller
                            name="category"
                            control={control}
                            render={({ field }) => (
                                <ReactSelect {...field}
                                    options={selectCategories}
                                    isClearable
                                    placeholder="Categoria"
                                    classNamePrefix="product-filter-select"
                                  
                                    onChange={value => handleChangeCategory(value as Category)}

                                    getOptionLabel={(category: Category) => category.name}
                                    getOptionValue={(category: Category) => String(category.id)}
                                />
                            )}

                        />
                    </div>
                    <button onClick={handleFormClear} className="btn btn-outline-secondary btn-prodct-filter-clear">LIMPAR <span className='btn-product-filter-word'>FILTRO</span></button>
                </div>

            </form>
        </div>

    )
}
