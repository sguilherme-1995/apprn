
    function TextoAtivi(){
        const [textoDigitado, setTextoDigitado] = useState('');
        const [textoPostado, setTextoPostado] = useState('')
        return (
          <View style={styles.body}>
            <Text/>
            <Text style={styles.sectionTitle} >Digite seu texto aqui!!</Text>
            <Text />
            <TextInput 
              style={{
                height: 100, 
                borderColor: 'black', 
                borderWidth: 2, 
                margin: 5}}
                placeholder="Digite aqui!"
                multiline={true}
                onChangeText={texto => setTextoDigitado(texto)}
                maxLength={140}
                value={textoDigitado}
      
              />
            <Button
            onPress={() => {
              if (textoDigitado.length < 50){
                Alert.alert("Caracteres minimos de 50")
              }else{
              setTextoDigitado('')  
              setTextoPostado(textoDigitado),
              Alert.alert("Texto Postado!")
              }
            }}
            title="Postar" color="#000000" />
            <Text />
            <Text style={styles.sectionTitle}>O texto que foi digitado Ã©: </Text>
          <Text style={styles.sectionTitle}>{textoDigitado}</Text>
          <Text />
          <Text />
            <Text style={styles.sectionTitle}>Textos antigos: </Text>
          <Text style={styles.sectionTitle}>{textoPostado}</Text>
          </View>
        )
      }