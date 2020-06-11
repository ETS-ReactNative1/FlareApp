/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
      id
      username
      password
      phone
      birthday
      date_created
      location
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
      id
      username
      password
      phone
      birthday
      date_created
      location
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
      id
      username
      password
      phone
      birthday
      date_created
      location
      createdAt
      updatedAt
    }
  }
`;
export const onCreatePost = /* GraphQL */ `
  subscription OnCreatePost {
    onCreatePost {
      id
      body
      shares
      reports
      timestamp
      user_id
      createdAt
      updatedAt
    }
  }
`;
export const onUpdatePost = /* GraphQL */ `
  subscription OnUpdatePost {
    onUpdatePost {
      id
      body
      shares
      reports
      timestamp
      user_id
      createdAt
      updatedAt
    }
  }
`;
export const onDeletePost = /* GraphQL */ `
  subscription OnDeletePost {
    onDeletePost {
      id
      body
      shares
      reports
      timestamp
      user_id
      createdAt
      updatedAt
    }
  }
`;
export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment {
    onCreateComment {
      id
      body
      reports
      timestamp
      post_id
      user_id
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment {
    onUpdateComment {
      id
      body
      reports
      timestamp
      post_id
      user_id
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment {
    onDeleteComment {
      id
      body
      reports
      timestamp
      post_id
      user_id
      createdAt
      updatedAt
    }
  }
`;
export const onCreatePostLike = /* GraphQL */ `
  subscription OnCreatePostLike {
    onCreatePostLike {
      post_id
      user_id
      createdAt
      updatedAt
    }
  }
`;
export const onUpdatePostLike = /* GraphQL */ `
  subscription OnUpdatePostLike {
    onUpdatePostLike {
      post_id
      user_id
      createdAt
      updatedAt
    }
  }
`;
export const onDeletePostLike = /* GraphQL */ `
  subscription OnDeletePostLike {
    onDeletePostLike {
      post_id
      user_id
      createdAt
      updatedAt
    }
  }
`;
export const onCreateCommentLike = /* GraphQL */ `
  subscription OnCreateCommentLike {
    onCreateCommentLike {
      comment_id
      user_id
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateCommentLike = /* GraphQL */ `
  subscription OnUpdateCommentLike {
    onUpdateCommentLike {
      comment_id
      user_id
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteCommentLike = /* GraphQL */ `
  subscription OnDeleteCommentLike {
    onDeleteCommentLike {
      comment_id
      user_id
      createdAt
      updatedAt
    }
  }
`;
