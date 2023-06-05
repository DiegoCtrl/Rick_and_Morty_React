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
        <View>
           <Image source={{
            uri: personagem.image
           }} style={{width:'300px', height:'300px'}} ></Image>
           <Text>{personagem.name}</Text>
           <Text>{personagem.species}</Text>
           <Text>{personagem.origin.name}</Text>
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
});


