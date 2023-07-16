import UiButton from './components/UiButton/UiButton'

import useCourses from './hooks/useCourses'

import Home from './pages/Home'

const App = () => {
  const { data, isLoading } = useCourses()
  return (
    <>
      <Home />
      {isLoading && !data ? (
        <div>Loading...</div>
      ) : (
        <>
          {data
            ? Object.keys(data).map((courseId) => (
                <UiButton
                  key={courseId}
                  title={courseId}
                  onClick={() => {
                    console.log('click')
                  }}
                />
              ))
            : 'No data'}
        </>
      )}
    </>
  )
}

export default App
