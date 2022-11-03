export default {
  name: 'save',
  title: 'Save',
  type: 'document',
  fields: [
    {
      name: 'postedBy',
      title: 'PostedBy',
      type: 'postedBy',
    },
    // user who saved the specific post
    {
      name: 'userId',
      title: 'UserId',
      type: 'string',
    },
  ],
};
