import { AxiosRequestConfig } from 'axios';
import { useEffect, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import ReactSelect from 'react-select';
import { Category } from '../../../../types/category';
import { Product } from '../../../../types/product';
import { requestBackend } from '../../../../util/requests';
import './styles.scss';


type UrlParams = {
  productId: string;
}

export default function Form() {

  const { productId } = useParams<UrlParams>();
  const isEditing = productId !== 'create';

  const navigate = useNavigate();

  const [selectCategories, setSelectCategories] = useState<Category[]>([]);

  const { register, handleSubmit, formState: { errors }, setValue, control } = useForm<Product>();


  useEffect(() => {
    requestBackend({ url: '/categories' })
      .then(response => {
        setSelectCategories(response.data.content);
      })
  }, [])

  useEffect(() => {
    if (isEditing) {
      requestBackend({ url: `/products/${productId}` })
        .then(response => {

          const product = response.data as Product;
          setValue('name', product.name);
          setValue('price', product.price);
          setValue('description', product.description)
          setValue('imgUrl', product.imgUrl)
          setValue('categories', product.categories)

        })
    }
  }, [isEditing, productId, setValue])

  const onSubmit = (formData: Product) => {   

    const config: AxiosRequestConfig = {
      method: isEditing ? 'PUT' : 'POST',
      url: isEditing ? `/products/${productId}` : '/products',
      data: formData,
      withCredentials: true,
    };

    requestBackend(config)
      .then((response) => {
        console.log(response.data)
        navigate("/admin/products")
      })


  };

  const handleCancel = () => {
    navigate("/admin/products")
  }

  return (
    <div className="product-crud-container">
      <div className="card-base product-crud-form-card">
        <h1 className="product-crud-form-title">DADOS DO PRODUTO</h1>

        <form onSubmit={handleSubmit(onSubmit)}>

          <div className="row product-crud-inputs-container">

            <div className="col-lg-6 product-crud-inputs-left-container">
              <div className="margin-bottom-30">
                <input
                  {...register("name", {
                    required: 'Campo obrigatório'
                  })}
                  type="text"
                  className={`form-control base-input ${errors.name ? 'is-invalid' : ''}`}
                  placeholder="Nome do produto"
                  name="name"
                />
                <div className="invalid-feedback d-block">{errors.name?.message}</div>
              </div>


              <div className="margin-bottom-30">

                <Controller
                  name="categories"
                  rules={{ required: true }}
                  control={control}
                  render={({ field }) => (
                    <ReactSelect {...field}
                      options={selectCategories}
                      isMulti
                      classNamePrefix="product-crud-select"
                      getOptionLabel={(category: Category) => category.name}
                      getOptionValue={(category: Category) => String(category.id)}
                    />
                  )}

                />
                {
                  errors.categories &&
                  <div className="invalid-feedback d-block">Campo obrigatório</div>
                }


              </div>


              <div className="margin-bottom-30">
                <input
                  {...register("price", {
                    required: 'Campo obrigatório'
                  })}
                  type="text"
                  className={`form-control base-input ${errors.price ? 'is-invalid' : ''}`}
                  placeholder="Preço"
                  name="price"
                />
                <div className="invalid-feedback d-block">{errors.price?.message}</div>
              </div>


              <div className="margin-bottom-30">
                <input
                  {...register("imgUrl", {
                    required: 'Campo obrigatório',
                    pattern: {
                        value: /^(https?|chrome):\/\/[^\s$.?#].[^\s]*$/gm,
                        message: 'Deve ser uma URL válida'
                    }
                })}
                  type="text"
                  className={`form-control base-input ${errors.imgUrl ? 'is-invalid' : ''}`}
                  placeholder="URL da image do produto"
                  name="imgUrl"
                />
                <div className="invalid-feedback d-block">{errors.imgUrl?.message}</div>
              </div>

            </div>

            <div className="col-lg-6">
              <div>
                <textarea rows={10}
                  {...register("description", {
                    required: 'Campo obrigatório'
                  })}
                  className={`form-control base-input h-auto ${errors.description ? 'is-invalid' : ''}`}
                  placeholder="Descrição"
                  name="description"
                />
                <div className="invalid-feedback d-block">{errors.description?.message}</div>
              </div>
            </div>

          </div>

          <div className="product-crud-buttons-container">
            <button
              className="btn btn-outline-danger product-crud-button"
              onClick={handleCancel}
            >
              CANCELAR
            </button>
            <button className="btn btn-primary text-white product-crud-button">SALVAR</button>

          </div>

        </form>

      </div>

    </div>
  )
}
