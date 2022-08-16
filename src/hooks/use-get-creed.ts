import * as React from 'react'
import firestore from '@react-native-firebase/firestore'

export const useGetCreed = (name: string) => {
  const [data, setData] = React.useState({})
  const [isLoading, setIsLoading] = React.useState(false)

  React.useEffect(() => {
    setIsLoading(true)

    firestore()
      .collection('crencas')
      .where('name', '==', name)
      .get()
      .then(querySnapshot => {
        let creed = {}
        querySnapshot.forEach((doc) => {
          creed = doc.data()
        })

        setIsLoading(false)
        setData(creed)
      })
  }, [])


  return [
    data,
    isLoading,
  ]
}
