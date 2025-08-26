const axios = require('axios');

exports.handler = async (event, context) => {

  const STORYBLOK_MANAGEMENT_TOKEN = process.env.STORYBLOK_MANAGEMENT_TOKEN;
  const STORYBLOK_SPACE_ID = process.env.STORYBLOK_SPACE_ID;
  const newSpaceName = `Global Finance Starter - ${new Date().toISOString().slice(0, 10)}`;

  const requestBody = {
    space: {
      name: newSpaceName
    }
  };

  const headers = {
    'Authorization': STORYBLOK_MANAGEMENT_TOKEN,
    'Content-Type': 'application/json'
  };

  const url = `https://api.storyblok.com/v1/spaces/${STORYBLOK_SPACE_ID}/duplicate`;

  try {
    const response = await axios.post(url, requestBody, { headers });

    const newSpace = response.data.space;

    return {
      statusCode: 200,
      body: JSON.stringify({
        message: 'Storyblok space successfully cloned!',
        newSpaceId: newSpace.id,
        newSpaceName: newSpace.name,
        previewUrl: `https://app.storyblok.com/#/spaces/${newSpace.id}/content/`,
      })
    };

  } catch (error) {
    console.error('Error duplicating Storyblok space:', error.response ? error.response.data : error.message);

    return {
      statusCode: error.response ? error.response.status : 500,
      body: JSON.stringify({
        message: 'Failed to clone Storyblok space.',
        error: error.response ? error.response.data : 'Internal Server Error'
      })
    };
  }
};
