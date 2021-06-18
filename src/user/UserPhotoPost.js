import React from 'react' 
import styles from './UserPhotoPost.module.css' 
import Input from '../ui/Input'
import Button from '../ui/Button'
import Error from '../ui/Error'
import useForm from '../hooks/useForm'
import useFetch from '../hooks/useFetch'
import { PHOTO_POST } from '../api'
import { useNavigate } from 'react-router'


const UserPhotoPost = () => {

  const nome            = useForm()
  const peso            = useForm('number')
  const idade           = useForm('number')
  const [img, setImg]   = React.useState({})
  const { data, error : erro, loading, request } = useFetch()
  const navigate        = useNavigate()

  React.useEffect( () => {
    if(data) navigate('/conta')
  }, [data, navigate])

  function handleSubmit(event){

    event.preventDefault()
    const formData = new FormData()

    if(erro) return false
    
    formData.append('img', img.raw)
    formData.append('nome', nome.value)
    formData.append('peso', peso.value)
    formData.append('idade', idade.value)
    
    const token = window.localStorage.getItem('token')
    const { url, options } = PHOTO_POST(token, formData)

    request(url, options)
    debugger //eslint-disable-line no-debugger
    if(erro !== null){
      console.error(erro)
    }
    console.log({
      data,
      loading
    })

  }

  function handleImgChange({ target }){
    setImg({
      preview: URL.createObjectURL(target.files[0]),
      raw: target.files[0]
    })
  }
  
  return (
    <section className={`${styles.photoPost} animeLeft`}>
      <form onSubmit={handleSubmit}>
        <Input 
          label="Nome"
          type="text"
          name="nome"
          {...nome}
        />

        <Input 
          label="Peso"
          type="text"
          name="peso"
          {...peso}
        />

        <Input 
          label="Idade"
          type="text"
          name="idade"
          {...idade}
        />

        <Input 
          label="Foto"
          type="file"
          name="img"
          id="img"
          className={styles.file}
          onChange={handleImgChange}
        />

        {loading 
          ? (<Button>Salvando...</Button>) 
          : (<Button>Enviar</Button>)
        }

        {erro && <Error>{erro}</Error>}

      </form>
      <div> 
        {img.preview 
          && <div 
              className={styles.preview}
              style={{backgroundImage:`url('${img.preview}')`}}>

            </div>
        } 
      </div>
    </section>
  )
}


export default UserPhotoPost