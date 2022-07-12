import * as React from 'react'
import firestore from '@react-native-firebase/firestore'
import AwesomeDebouncePromise from 'awesome-debounce-promise'

export const useGetCreeds = () => {
  const [data, setData] = React.useState([])
  const [isLoading, setIsLoading] = React.useState(false)

  const getAllCreeds = () => {
    setIsLoading(true)

    return firestore()
      .collection('crencas')
      .onSnapshot(querySnapshot => {
        let creeds: any = []
        querySnapshot.forEach(documentSnapshot => {
          const data = documentSnapshot.data()

          creeds.push({
            key: documentSnapshot.id,
            name: data.name,
          })
        })

        setIsLoading(false)
        setData(creeds)
      })
  }

  React.useEffect(() => {
    const subscriber = getAllCreeds()

    return () => subscriber()
  }, [])

  const searchCreeds = async (text: string) => {
    if (text.length === 0) {
      AwesomeDebouncePromise(() => {
        getAllCreeds()
      }, 1500)()

      return
    }

    await AwesomeDebouncePromise(() => {
      setIsLoading(true)

      firestore()
        .collection('crencas')
        .where('tags', 'array-contains', text)
        .get()
        .then(querySnapshot => {
          let creeds: any = []
          querySnapshot.forEach((doc) => {
            const data = doc.data()

            creeds.push({
              key: doc.id,
              name: data.name,
            })
          })

          setIsLoading(false)
          setData(creeds)
        })

      setIsLoading(false)
    }, 500)()
  }

  return [
    data,
    isLoading,
    searchCreeds,
  ]
}
