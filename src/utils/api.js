const axios = require('axios');

export const loadReviewTypes = async function() {
  const response = await axios.get('/api/v1/review/types');
  return response.data.review_types;
};




