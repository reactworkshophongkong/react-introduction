import React, { useState, useEffect } from 'react'

const useTrackClipboard = () => {
  const [clipboardData, setClipboardData] = useState('');

  useEffect(() => {
    const handleCopyClipboard = event => {
      setClipboardData(window.getSelection().toString())
    }

    window.addEventListener('copy', handleCopyClipboard)
    return () => window.removeEventListener('copy', handleCopyClipboard)
  }, [])

  return clipboardData
}

class TrackClipboardClass extends React.Component {
  state = {
    clipboardData: ''
  }

  handleCopyClipboard = event => {
    this.setState({
      clipboardData: window.getSelection().toString()
    })
  }

  componentDidMount() {
    window.addEventListener('copy', this.handleCopyClipboard)
  }

  componentWillUnmount() {
    window.removeEventListener('copy', this.handleCopyClipboard)
  }

  render() {
    return  this.props.render(this.state.clipboardData)
  }
}

export { useTrackClipboard, TrackClipboardClass }