import { StyleSheet, Text, View, Image } from 'react-native';



export default function App() {
  
  // DESESTRUCTURAR

  //OBJETO LITERAL

  const soyObjeto={
    id:"1",
    nombre:"Pedro",
    apellido:"Marquez"
  }
  
  //desestruturacion de un objeto

  const {nombre}=soyObjeto
  console.log(nombre)

  //DESESTRUCTURAR UN ARRAY
   const soyArray=["tony","el gordo"]

   const [uno, dos]=soyArray  
  
  
   const peliculas=[
     {
       id:"1",
       titulo:"Tiburon",
       imagenUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3BpykmXR-VH9SjkVYkXQy5MZ0iVI4SwJp3uGRxiCLUKMPRTPI7uJIwD7b0nmYAUCd15sCP5wIpWZWDcvIBYKrjZ7i_AKOzljaJbMQqA&s=10",
       anio:"1975",
     },
      {
       id:"2",
       titulo:"Terminator",
       imagenUrl:"https://play-lh.googleusercontent.com/dUV33D3ryG6AEK7nBuFKrsVWVCe393A1gwZTMzOWqcmHY9scdAUmsBzQZnuT2_NaJE8",
       anio:"1984",
     }, 
      {
       id:"3",
       titulo:"La historia sin fin",
       imagenUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIhRLg_qEMoY00ivbIwM_pj3VlgCM3NRetNR-i7fHZoyZEK8NRW4_hj3DK2nWh-Oir3VNSUvUmHuF_La5yyjId3WvmnsLNi1QkJEdayw&s=10",
       anio:"1984",
     },
     ]
  
  
  
  
  

  
  
  return (

    <View style={styles.container}>
      <Text  style={styles.tituloSeccion}>Peliculas</Text>

       <View style={styles.contenedorPelis}>

  
    
    {peliculas.length>0 ? (

       peliculas.map((pelicula,index)=>(
        <Card 
        key={index} 
        titulo={pelicula.titulo} 
        imagenUrl={pelicula.imagenUrl}
        anio={pelicula.anio}></Card>
       ))

    ):(
      <Text> Sin peliculas disponibles</Text>
    )

    }
     
    </View>
    
    </View>
   
  );
}




const Card=({titulo, imagenUrl, anio})=>{


  return(
    <View style={styles.card}>
     <Image
      source={{uri:imagenUrl}}
      style={styles.image}
    />
    <Text  style={{ color: "white", textAlign: "center", fontSize:16 }}>{titulo}</Text>
    <Text style={styles.subTitulo}>{anio}</Text>
    </View>
  )
}




const styles = StyleSheet.create({
   container: {
  flex: 1,
  flexWrap: "wrap",
  justifyContent: "space-between",
  backgroundColor: "black",
  paddingTop:50,

},
 contenedorPelis: {
  flex: 1,
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: "space-between",
  backgroundColor: "black",
  padding: 23,
  
},

card: {
    width: "48%",
    backgroundColor: "black",
    marginBottom: 10,
    borderRadius: 6,
    gap:6,
    padding: 1,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#808080",
    elevation: 5,
  
  },
  image: {
    width: "100%",
    height: 180,
    borderRadius: 6,
  },
  subTitulo:{
    fontSize:12,
    color:"gray",
  },
 tituloSeccion: {
  color: "#F0F8FF", 
  alignSelf: "center",
  fontSize: 24,
  fontWeight: "bold",
  backgroundColor: "#333333",
  borderWidth: 1,
  borderColor: "#F0F8FF",
  borderRadius: 8,
  paddingHorizontal: 12,
  paddingVertical: 6,
  marginVertical: 10,
  elevation: 5,
}
 
});
