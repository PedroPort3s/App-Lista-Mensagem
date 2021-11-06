import React, {useState} from 'react';
import { Button, StyleSheet, Text, View , Pressable } from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';

export default class ListaTexto extends React.Component 
{
  constructor(){
    super();
    this.state = {listaTextos : [], txtAdd:""};
  }

  addTxtLista = () =>
  {
    let lst = this.state.listaTextos;
    let textoAdd = this.state.txtAdd;

    if (textoAdd !== undefined && textoAdd.length > 0){
        lst.push(textoAdd);
        console.log(textoAdd);

        this.textInput.clear();

        this.setState({listaTextos : lst,txtAdd:''});
    }
  }

  limpar = () =>
  {
    this.setState({listaTextos : [],txtAdd:''});
    this.textInput.clear();
  }

  render(){
    return (
      <View style={styles.container}>
        <Text style={styles.txtId}>Pedro Daniel Portes RA: 2019102845</Text>
        <View style={styles.sideBySide}>
        <Pressable onPress={this.limpar} style={styles.btnLimpar}>
            <Text style={styles.txtButton}>Limpar</Text>
          </Pressable>
          <TextInput ref={input => { this.textInput = input }} onChangeText={(txt) => this.setState({txtAdd: txt})} style={styles.input}/>
          <Pressable onPress={this.addTxtLista} style={styles.btnInserir}>
            <Text style={styles.txtButton}>Inserir</Text>
          </Pressable>
        </View>

        <ScrollView style="auto">
          {
            this.state.listaTextos.map((y) => {
              return (<Text>{y}</Text>);
            })
          }
        </ScrollView>
      </View>
    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  sideBySide: {
    flexDirection:'row'
  },
  list:{
    flex: 2
  },
  input: {
    flexDirection:'row',
    flexWrap:'wrap',
    marginTop:10,
    height: 40,
    width: 200,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  txtId: {
    marginTop:50,
    width:'100%',
    fontWeight: 'bold',
    fontSize: 20,
    textAlign:'center',
    padding: 10,
  },
  btnLimpar:{
    alignItems: 'center',
    justifyContent: 'center',    
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'red',
  },
  btnInserir:{
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'black',
  },
  txtButton:{
    color:'white'
  }
});
