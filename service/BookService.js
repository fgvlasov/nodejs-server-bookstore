'use strict';


/**
 * Add a new book to the store
 *
 * body Book Pet object that needs to be added to the store
 * no response value expected for this operation
 **/
exports.addBook = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Deletes a book
 *
 * bookId Long Book id to delete
 * api_key String  (optional)
 * no response value expected for this operation
 **/
exports.deleteBook = function(bookId,api_key) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Finds books by author
 * Returns a list of books by the specified author
 *
 * author String The author to search for
 * returns List
 **/
exports.findBooksByAuthor = function(author) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "number" : 0,
  "pages" : 1,
  "ISBN" : "ISBN",
  "year" : 6,
  "author" : "author",
  "description" : "description",
  "fileUrl" : "fileUrl",
  "language" : "language",
  "id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
  "title" : "title",
  "category" : "category",
  "thumbnailUrl" : "thumbnailUrl"
}, {
  "number" : 0,
  "pages" : 1,
  "ISBN" : "ISBN",
  "year" : 6,
  "author" : "author",
  "description" : "description",
  "fileUrl" : "fileUrl",
  "language" : "language",
  "id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
  "title" : "title",
  "category" : "category",
  "thumbnailUrl" : "thumbnailUrl"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Finds Books by status
 * Multiple status values can be provided with comma separated strings
 *
 * status List Status values that need to be considered for filter
 * returns List
 **/
exports.findBooksByStatus = function(status) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "number" : 0,
  "pages" : 1,
  "ISBN" : "ISBN",
  "year" : 6,
  "author" : "author",
  "description" : "description",
  "fileUrl" : "fileUrl",
  "language" : "language",
  "id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
  "title" : "title",
  "category" : "category",
  "thumbnailUrl" : "thumbnailUrl"
}, {
  "number" : 0,
  "pages" : 1,
  "ISBN" : "ISBN",
  "year" : 6,
  "author" : "author",
  "description" : "description",
  "fileUrl" : "fileUrl",
  "language" : "language",
  "id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
  "title" : "title",
  "category" : "category",
  "thumbnailUrl" : "thumbnailUrl"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Finds books by title
 * Returns a list of books with titles matching the search query
 *
 * title String The title to search for
 * returns List
 **/
exports.findBooksByTitle = function(title) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "number" : 0,
  "pages" : 1,
  "ISBN" : "ISBN",
  "year" : 6,
  "author" : "author",
  "description" : "description",
  "fileUrl" : "fileUrl",
  "language" : "language",
  "id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
  "title" : "title",
  "category" : "category",
  "thumbnailUrl" : "thumbnailUrl"
}, {
  "number" : 0,
  "pages" : 1,
  "ISBN" : "ISBN",
  "year" : 6,
  "author" : "author",
  "description" : "description",
  "fileUrl" : "fileUrl",
  "language" : "language",
  "id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
  "title" : "title",
  "category" : "category",
  "thumbnailUrl" : "thumbnailUrl"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Find book by ID
 * Returns a single book
 *
 * bookId Long ID of book to return
 * returns Book
 **/
exports.getBookById = function(bookId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "number" : 0,
  "pages" : 1,
  "ISBN" : "ISBN",
  "year" : 6,
  "author" : "author",
  "description" : "description",
  "fileUrl" : "fileUrl",
  "language" : "language",
  "id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
  "title" : "title",
  "category" : "category",
  "thumbnailUrl" : "thumbnailUrl"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get a list of books
 *
 * returns List
 **/
exports.getBooks = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "number" : 0,
  "pages" : 1,
  "ISBN" : "ISBN",
  "year" : 6,
  "author" : "author",
  "description" : "description",
  "fileUrl" : "fileUrl",
  "language" : "language",
  "id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
  "title" : "title",
  "category" : "category",
  "thumbnailUrl" : "thumbnailUrl"
}, {
  "number" : 0,
  "pages" : 1,
  "ISBN" : "ISBN",
  "year" : 6,
  "author" : "author",
  "description" : "description",
  "fileUrl" : "fileUrl",
  "language" : "language",
  "id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
  "title" : "title",
  "category" : "category",
  "thumbnailUrl" : "thumbnailUrl"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Update an existing book
 *
 * body Book Pet object that needs to be added to the store
 * no response value expected for this operation
 **/
exports.updateBook = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Updates a book in       the store with form data
 *
 * bookId Long ID of book that needs to be updated
 * no response value expected for this operation
 **/
exports.updateBookWithForm = function(bookId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Uploads a book PDF file
 *
 * body Object  (optional)
 * bookId Long ID of book to update
 * returns ApiResponse
 **/
exports.uploadFile = function(body,bookId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "code" : 0,
  "type" : "type",
  "message" : "message"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

