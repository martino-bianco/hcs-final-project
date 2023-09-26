<template>
  <div id="wrapper">
    <form id="newPostForm">
      <h2>Enter a new post:</h2>
      <h3>(sorry, still placeholder 😞)</h3>
      <label for="title">Title:</label>
      <input type="text" id="title" name="title" />

      <label for="visitDate">Visiting Date:</label>
      <input type="date" id="visitDate" name="visitDate" />

      <label for="image">Image URL:</label>
      <input type="text" id="image" name="image" />

      <label for="latitude">Latitude:</label>
      <input type="text" id="latitude" name="latitude" />

      <label for="longitude">Longitude:</label>
      <input type="text" id="longitude" name="longitude" />

      <label for="text">Text:</label>
      <textarea id="text" name="text"></textarea>

      <button id="saveButton">Save</button>
    </form>
  </div>
</template>
<style scoped>
#wrapper {
  text-align: center;
  font-size: 18px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  margin: 60px auto 20px;
  max-width: 400px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  font-size: 26px;
  font-weight: bold;
}

#newPostForm {
  text-align: left;
  font-size: 18px;
}

#newPostForm h2 {
  margin-top: -4px;
  margin-bottom: 15px;
  text-align: center;
}
#newPostForm h3 {
  text-align: center;
}

#newPostForm input[type='text'],
#newPostForm input[type='date'],
#newPostForm textarea {
  width: 90%;
  padding: 6px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding-left: 10px;
}

#newPostForm button {
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin: 0 auto;
  display: block;
}
</style>
