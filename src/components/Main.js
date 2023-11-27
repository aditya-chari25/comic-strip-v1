import React, { useState } from 'react';

const Main = () => {
  // State to hold the data to be sent in the POST request
  const [postData, setPostData] = useState({
    inputs: ''
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPostData({
      ...postData,
      [name]: value,
    });
  };

  // Function to handle the submit button click
  const handleSubmit = () => {
    try {
      // Make the POST request using the fetch function
      console.log(JSON.stringify(postData))
      const response = fetch("https://xdwvg9no7pefghrn.us-east-1.aws.endpoints.huggingface.cloud", {
        method: 'POST',
        headers: { 
            "Accept": "image/png",
            "Authorization": "Bearer VknySbLLTUjbxXAXCjyfaFIPwUTCeRXbFSOjwRiCxsxFyhbnGjSFalPKrpvvDAaPVzWEevPljilLVDBiTzfIbWFdxOkYJxnOPoHhkkVGzAknaOulWggusSFewzpqsNWM", 
            "Content-Type": "application/json" 
        },
        body: JSON.stringify(postData), // Convert the data to JSON format
      });

      // Check if the request was successful (status code 2xx)
	    console.log(response.blob);
      // if (response) {
      //   console.log('POST request successful');
      //   // Handle the response data if needed
      // } else {
      //   console.error('POST request failed');
      //   // Handle errors or other responses
      // }
    } catch (error) {
      console.error('Error:', error);
      // Handle network errors or other exceptions
    }
  };

  return (
    <div>
      {/* Your form elements go here */}
      <form>
        {/* Input fields, etc. */}
        <input
            type="text"
            name="inputs"
            value={postData.inputs}
            onChange={handleInputChange}
          />
        <button type="button" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Main;
