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
      <Text style={styles.titulo}>Rick and Morty</Text>
      <Text style={styles.titulosub}>Personagens</Text>
      <Text style={styles.sub3text}></Text>
      <Button title='Gerar personagem'color='green' onPress={mudarPersonagem}></Button>
      <Text style={styles.sub3text}>clique no botão para mudar de personagem {'\n'}</Text>
      
      <View>
       {personagem &&
        <View style={styles.card}>
           <Image style={styles.img} source={{
            uri: personagem.image
           }} ></Image>
           <View>
            <Text style={styles.name}>{personagem.name}</Text>
            <Text style={styles.desc}><Text style={styles.sub2text}>Specie:  </Text>{personagem.species}</Text>
            <Text style={styles.desc}><Text style={styles.sub2text}>Origem:  </Text>{personagem.origin.name}</Text>
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
  titulo: {
      fontSize: 50,
      fontWeight: 'bold',
      color: '#111',
      paddingTop: 15.
  },
  titulosub: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff',
    padding: 15,
    borderRadius: 10,
    backgroundColor: 'rgb(60, 62, 68)'
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
  desc: {
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
    fontWeight: 'bold',
    color: '#000',
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


