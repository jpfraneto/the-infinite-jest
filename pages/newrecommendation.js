import React, { useState } from 'react';

const NewRecommendation = () => {
  const [url, setUrl] = useState('');
  const handleSubmit = async e => {
    e.preventDefault();
    const reqParams = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        url,
      }),
    };
    const response = await fetch(
      'http://www.theinfinitejest.tv/api/newrecommendation',
      reqParams
    );
    const data = await response.json();
    console.log(
      'the data that I got back after trying to add the recommendation to the db is: ',
      data
    );
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <label htmlFor='videoURL' className='content'>
            Youtube URL:
          </label>
          <input
            placeholder='video url'
            id='videoURL'
            type='text'
            name='url'
            required
          />
        </div>
        <button type='submit'>Submit Url</button>
      </form>
    </div>
  );
};

export default NewRecommendation;
