import React, { useState } from "react"
import axios from "axios"
import Helmet from "react-helmet"
import styled from "@emotion/styled"
import Layout from "components/Layout"
import Button from "components/_ui/Button"

const ContactTitle = styled("h1")`
  margin-bottom: 1em;
`

const Input = styled.input`
  width: 100%;
  height: 30px;
  padding: 5px 5px;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 3px;
  margin-bottom: 10px;
`

const TextArea = styled.textarea`
  width: 100%;
  height: 70px;
  padding: 5px 5px;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 3px;
  margin-bottom: 10px;
`

const Contact = () => {
  const [serverState, setServerState] = useState({
    submitting: false,
    status: null,
  })
  const handleServerResponse = (ok, msg, form) => {
    setServerState({
      submitting: false,
      status: { ok, msg },
    })
    if (ok) {
      form.reset()
    }
  }
  const handleOnSubmit = e => {
    e.preventDefault()
    const form = e.target
    setServerState({ submitting: true })
    axios({
      method: "post",
      url: "https://formspree.io/xqkyngdo",
      data: new FormData(form),
    })
      .then(r => {
        handleServerResponse(true, "Thanks!", form)
      })
      .catch(r => {
        handleServerResponse(false, r.response.data.error, form)
      })
  }

  return (
    <>
      <Helmet
        title={`Contact`}
        titleTemplate={`%s | Josh Fradley, Web Developer`}
        meta={[
          {
            name: `description`,
            content: "Contact",
          },
          {
            property: `og:title`,
            content: `Contact | Josh Fradley, Web Developer`,
          },
          {
            property: `og:description`,
            content: "Contact",
          },
          {
            property: `og:type`,
            content: `website`,
          },
          {
            name: `twitter:card`,
            content: `summary`,
          },
          {
            name: `twitter:creator`,
            content: "Contact",
          },
          {
            name: `twitter:title`,
            content: "Contact",
          },
          {
            name: `twitter:description`,
            content: "Contact",
          },
        ]}
      />
      <Layout>
        <ContactTitle>Contact</ContactTitle>
        <form onSubmit={handleOnSubmit}>
          <label htmlFor="email">Email:</label>
          <Input id="email" type="email" name="email" required />
          <label htmlFor="message">Message:</label>
          <TextArea id="message" name="message"></TextArea>
          <Button type="submit" disabled={serverState.submitting}>
            Submit
          </Button>
          {serverState.status && (
            <p className={!serverState.status.ok ? "errorMsg" : ""}>
              {serverState.status.msg}
            </p>
          )}
        </form>
      </Layout>
    </>
  )
}

export default Contact
