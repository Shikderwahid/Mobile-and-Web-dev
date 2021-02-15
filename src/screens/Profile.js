import React from "react"
import { Text, View, StyleSheet, Image} from "react-native"

const Profile = () => {
  return (
    <View style={styles.viewStyle}>
        <Image
                source = {require ('../../image/profile.jpg')}
                style={styles.imageStyle}
        />
        <Text style = {styles.textStyle}>
            Name:Wahid{"\n"}
            Student ID: 170042089{"\n"}
            Room No: NA{"\n"}
            Email: wahidshikder@iut-dhaka.edu{"\n"}
        </Text>
    </View>
  )
}

const styles = StyleSheet.create({
    textStyle: {
      fontSize: 18,
      color: "blue",
      alignSelf: "center",
    },
    viewStyle: {
      
      alignSelf: "center",
      backgroundColor: "white"
    },
    imageStyle: {
      margin: 60,  
      height: 260,
      width: 260,
      alignSelf: 'center',
  },
  })

export default Profile