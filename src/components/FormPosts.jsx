import { useState, useEffect } from "react";

const categories = [
  'Frontend',
  'Backend',
  'Fullstack',
  'DevOps',
  'Mobile'
]
const tags = [
  { id: 1, name: 'HTML' },
  { id: 2, name: 'CSS' },
  { id: 3, name: 'JavaScript' },
  { id: 4, name: 'React' }
]

const FormPosts = () => {

  const initialformData = {
    title: '',
    urlImage: '',
    content: '',
    category: '',
    tags: [], // array di stringhe
    published: false
  }

  const [formData, setFormData] = useState(initialformData)
  const [posts, setPosts] = useState([])

  const handleField = (e) => {

    let value = e.target.value;
    if (e.target.name === 'category') {
      value = categories[e.target.value]
    }
    if (e.target.type === 'checkbox') {
      value = e.target.checked
    }
    setFormData({
      ...formData,
      [e.target.name]: value
    })
    console.log(formData);

  }

  const handleChangeTags = (e) => {
    let { tags, ...others } = formData;
    // se il tag è già presente nell'array dei tag lo tolgo
    if (tags.includes(e.target.value)) {
      tags = tags.filter(tag => tag !== e.target.value)
    } else {
      tags = [...tags, e.target.value]
    }

    setFormData({
      tags,
      ...others
    })

  }

  const handleSumbit = (e) => {
    e.preventDefault()
    console.log(formData);
    setPosts([
      { id: self.crypto.randomUUID(), ...formData },
      ...posts
    ])
  }

  const handleRemovePost = (id) => {
    console.log(id);
    setPosts(posts.filter(post => post.id !== id))
  }

  useEffect(() => {
    if (formData.published) {
      alert('Il posto verrà pubblicato')
    }
  }, [formData.published])


  return (
    <div className="container my-5">
      <div className="card p-4 mb-4">
        <h2 className="mb-3">Aggiungi un Post</h2>
        <form onSubmit={handleSumbit}>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">Titolo</label>
            <input
              type="text"
              id="title"
              className="form-control"
              placeholder="Inserisci il titolo"
              name="title"
              value={formData.title}
              onChange={handleField}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="image" className="form-label">Immagine</label>
            <input
              type="text"
              id="image"
              className="form-control"
              placeholder="URL dell'immagine"
              name="urlImage"
              value={formData.urlImage}
              onChange={handleField}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="content" className="form-label">Contenuto</label>
            <textarea
              id="content"
              className="form-control"
              rows="5"
              placeholder="Inserisci il contenuto"
              name="content"
              value={formData.content}
              onChange={handleField}
            ></textarea>
          </div>
          <div className="mb-3">
            <select
              className="form-select"
              onChange={handleField}
              name="category"
              defaultValue=""
            >
              <option selected>Seleziona una categoria</option>
              {categories.map((category, index) => (
                <option key={index} value={index}>{category}</option>
              ))}
            </select>
          </div>
          <div className="mb-3">
            <label className="form-label">Tags</label>
            {tags.map(tag => (
              <div key={`tag${tag.id}`} className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id={`tag${tag.id}`}
                  value={tag.name}
                  onChange={handleChangeTags}
                />
                <label className="form-check-label" htmlFor={`tag${tag.id}`}>{tag.name}</label>
              </div>
            ))}

          </div>
          <div className="form-check mb-3">
            <input
              className="form-check-input"
              type="checkbox"
              id="published"
              name="published"
              checked={formData.published}
              onChange={handleField}
            />
            <label className="form-check-label" htmlFor="published">Pubblicato</label>
          </div>
          <button type="submit" className="btn btn-primary" >Aggiungi</button>
        </form>
      </div>


      <div className="card p-4">
        <h2 className="mb-3">Lista Posts</h2>
        {/* stampo la tabella dei post solo se sono presenti  */}
        {posts.length > 0 ? (
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Immagine</th>
                <th>Titolo</th>
                <th>Contenuto</th>
                <th>Categoria</th>
                <th>Tags</th>
                <th>Disponibile</th>
                <th>Azioni</th>
              </tr>
            </thead>
            <tbody>
              {posts.map(post => (
                <tr key={post.id}>
                  <td>
                    <img src={post.urlImage} alt={post.title} width="100" />
                  </td>
                  <td>{post.title}</td>
                  <td>{post.content}</td>
                  <td>{post.category}</td>
                  <td>{post.tags.join(', ')}</td>
                  <td>{post.published ? 'Sì' : 'No'}</td>
                  <td>
                    <button onClick={() => handleRemovePost(post.id)} className="btn btn-danger btn-sm" >
                      <i className="fa-solid fa-trash-can"></i>
                    </button>
                  </td>
                </tr>
              ))}

            </tbody>
          </table>
        ) : (
          <h3>Non sono presenti post</h3>
        )}

      </div>
    </div>
  );
};

export default FormPosts;