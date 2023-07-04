import { addPostActionCreator, profileReducer } from "./profileReducer";

const state = {
  posts: [
    { id: 1, message: "How are you?!", likeCount: 10 },
    { id: 2, message: "This is my first post.", likeCount: 11 },
    { id: 3, message: "Give me your motorcycle!", likeCount: 35 },
    { id: 4, message: "Meow!!!", likeCount: 5 }
  ]
};

it('new post should be added', () => {
  let action = addPostActionCreator("hedgehog is biker!");
  let newState = profileReducer(state, action);
  expect(newState.posts.length).toBe(5);

});

it('new post should be added', () => {
  let action = addPostActionCreator("hedgehog is biker!");
  let newState = profileReducer(state, action);

  expect(newState.posts[4].message).toBe("hedgehog is biker!");
});