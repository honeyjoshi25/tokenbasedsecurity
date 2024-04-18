import React, { useEffect, useState } from 'react'
import './TotalRequests.css'
import axios from 'axios'

import { baseUrl } from '../../config/baseUrl'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { CheckCircleOutlineSharp, CancelOutlined } from '@material-ui/icons'
import AdminHeader from '../../components/AdminHeader/AdminHeader'


const TotalRequests = () => {
  const [Requests, setRequests] = useState({})

  const fetchData = async () => {
    try {
      await axios
        .get(baseUrl.UrlLocal + 'getTotalRequests')
        .then((response) => {
          if (response) {
            if (response.data.status === 200) {
              console.log(response.data.message)
              setRequests(response.data.message)
            } else {
              toast.error(response.data.message, {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 3000,
              })
            }
          }
        })
        .catch((error) => {
          toast.error('Internal Server Error occured!!', {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 3000,
          })
        })
    } catch (error) {
      console.log(error)
      toast.error('Something Went Wrong While Fetching Requests!!', {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 5000,
      })
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
    <section style={{width:'0vw',height:'0vh'}}></section>
      <AdminHeader />
      <section>
        <div className="App">
          {Requests.length > 0 ? (
            <>
              <span className="Title">Welcome Admin!</span>

              <div className="subTitle">
                {' '}
                <span>Total invite requests</span>
                <span className="requests">
                  Pending invitations: {Requests.length}
                </span>
              </div>

              <div className="mainDiv">
                <table>
                  <thead>
                    <tr>
                      <th>No.</th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Phone</th>
                      <th>Country</th>
                      <th>Message</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Requests.map((item, index) => {
                      return (
                        <tr key={index}>
                          <td>{index + 1}</td>
                          <td>{item.name}</td>
                          <td>{item.email}</td>
                          <td>{item.phone}</td>
                          <td>{item.country}</td>
                          <td>{item.message}</td>
                          <td>
                            {' '}
                            <CheckCircleOutlineSharp
                              style={{
                                cursor: 'pointer',
                                marginRight: '20px',
                                color: 'green',
                              }}
                            />
                            <CancelOutlined
                              style={{ cursor: 'pointer', color: 'red' }}
                            />
                          </td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
              </div>
            </>
          ) : null}
        </div>
      </section>
    </>
  )
}

export default TotalRequests
