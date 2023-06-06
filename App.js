import axios from 'axios';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';


export default function App() {
  
  const [id, setId] = useState(1)
  const [personagem, setPersonagem] = useState();
  
  useEffect(() => {
    axios.get(`https://rickandmortyapi.com/api/character/`+ id)
    .then((personagem)=>setPersonagem(personagem.data))
  },[id]);

  const mudarPersonagem = ()=>{
    setId(id+1)
  }

  return (
    <View style={styles.container}>
      <Text>Rick and Morty</Text>
      <Text>Personagens</Text>
      <Button title='Mostre-me' onPress={mudarPersonagem} ></Button>
      <Text>clique no botão para mudar de personagem</Text>
      
      <View>
       {personagem &&
        <View style={styles.card}>
           <Image style={styles.img} source={{
            uri: personagem.image
           }} ></Image>
           <View>
            <Text style={styles.name}>{personagem.name}</Text>
            <Text style={styles.subtext}><Text style={styles.sub2text}>Specie:  </Text>{personagem.species}</Text>
            <Text style={styles.subtext}><Text style={styles.sub2text}>Origem:  </Text>{personagem.origin.name}</Text>
            <Text style={styles.sub3text}></Text>
            </View>
        </View>
      }
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    width:300, 
    height:300,
    borderRadius:10,
    padding: 0
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    paddingTop: 15.
  },
  subtext: {
    fontSize: 15,
    color: '#fff',
  },
  sub2text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  sub3text: {
    padding: 15,
  },
  card:{
    flex: 1,
    width: '100%',
    height:400,
    backgroundColor:'rgb(60, 62, 68)',
    borderRadius:10,
    alignItems:'center',
  }
});


