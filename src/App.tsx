import api from './api'
import Home from './pages/Home'

const App = () => {
  // api
  //   .createUser({ name: 'Ivan', _id: '', password: 'qwerty' })
  //   .then((res) => console.log(res))
  //   .catch((e) => console.warn(e))

  api.getData().then((data) => console.log(data))
  setTimeout(() => api.loginUser('user123@gmail.com', 'qwerty123'), 2000)
  // setTimeout(() => api.logoutUser(), 10000)

  return <Home />
}

export default App
