import React from "react"
import { toast } from "react-toastify"

toast.configure({
  position: "top-right",
  autoClose: 5000,
  hideProgressBar: true,
  closeOnClick: true,
  draggable: true
})

export default class FlashMessages extends React.Component {

  componentDidMount() {
    this.handleToastAction()
  }

  componentDidUpdate(prevProps, prevState) {
    this.handleToastAction()
  }

  handleToastAction() {
    const { flashMessage } = this.props

    if(flashMessage && flashMessage.success) {
      toast.success(flashMessage.success)
    } else if(flashMessage && flashMessage.failure && flashMessage.failure.title) {
      flashMessage.failure.messages.map((message, index) => {
        toast.error(message)
      })
    } else if(flashMessage && flashMessage.failure) {
      toast.error(flashMessage.failure)
    } else if(flashMessage && flashMessage.alert) {
      toast.error(flashMessage.alert)
    } else if(flashMessage && flashMessage.notice) {
      toast.info(flashMessage.notice)
    }
  }

  render() {
    return <React.Fragment />
  }
}
