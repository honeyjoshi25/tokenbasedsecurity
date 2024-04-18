import { React, useState, useRef } from 'react'
import './AdminPanel.css'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { baseUrl } from '../../config/baseUrl'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import AdminHeader from '../../components/AdminHeader/AdminHeader'
toast.configure()

export const AdminPanel = () => {
  //api
  const [user, setUser] = useState({
    image: '',
  })

  //image drag-drop
  const fileInput = useRef(null)
  const [image, setImage] = useState()
  const [previewUrl, setPreviewUrl] = useState('')
  const handleFile = (file) => {
    //you can carry out any file validations here...
    setImage(file)
    setPreviewUrl(URL.createObjectURL(file))
    setUser({ ...user, file: file })
  }
  const handleOndragOver = (event) => {
    event.preventDefault()
  }
  const handleOndrop = (event) => {
    //prevent the browser from opening the image
    event.preventDefault()
    event.stopPropagation()
    //let's grab the image file
    let imageFile = event.dataTransfer.files[0]
    handleFile(imageFile)
  }

  const submit = async (e) => {
    e.preventDefault()

    if (image !== undefined) {
      console.log(image, 'image')

      const formdata = new FormData()
      formdata.append('img_product', image)

      axios
        .post(baseUrl.UrlLocal + 'img/changeDashboardImg', formdata, {
          headers: { 'Content-Type': 'multipart/form-data' },
        })
        .then((res) => {
          console.log(res)
          if (res.data.status === 200) {
            toast.success(res.data.message, {
              position: toast.POSITION.TOP_RIGHT,
              autoClose: 3000,
            })
            setPreviewUrl('')
          } else if (res.status === 400) {
            toast.error('Something Went Wrong While Uploading Image!!', {
              position: toast.POSITION.TOP_RIGHT,
              autoClose: 3000,
            })
          }
        })
        .catch((error) => {
          toast.error('Internal Server Error occured!!', {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 3000,
          })
        })
    } else {
      toast.error('Please Upload Image!!', {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 3000,
      })
    }
  }

  return (
    <>
    <section style={{width:'0vw',height:'0vh'}}></section>
      <AdminHeader />
      <section>
        <div className="createPage">
          <div className="CreateCard">
            <div className="leftCard">
              <div className="uploadImage">
                <p>Update Dashboard Image</p>

                <div
                  className="dragDrop"
                  onDragOver={handleOndragOver}
                  onDrop={handleOndrop}
                  onClick={() => fileInput.current.click()}
                >
                  <div className="dragDropspan">
                    <p>Click to select or Drag and drop image here....</p>
                    <span>Image should be in .png format</span>
                    <span>Image Dimension : 2308 * 1719</span>
                  </div>

                  <input
                    type="file"
                    accept="image/*"
                    ref={fileInput}
                    hidden
                    onChange={(e) => handleFile(e.target.files[0])}
                  />
                  {previewUrl && (
                    <div>
                      <img src={previewUrl} alt="" />
                    </div>
                  )}
                </div>
                <Link to="collection" className="link">
                  <div className="createButton">
                    <button
                      className="buttoncreate"
                      type="submit"
                      onClick={submit}
                    >
                      Submit
                    </button>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
