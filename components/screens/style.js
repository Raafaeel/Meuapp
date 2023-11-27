import { StyleSheet } from 'react-native';
export default StyleSheet.create({
    container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#000000'
                },
    itemContainer: {
    marginBottom: 16,
    padding: 16,
    borderRadius: 10,
    backgroundColor: '#88d9c0',
    shadowColor: "#000", //shadow para adcionar
    shadowOffset: { //um efeito sombreado abaixo do item
    width: 0,
    height: 2, }, 
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5, }, //um efeito de elevação, se destacando na tela
    itemDate: {
    fontSize: 15,
    color: '#000000',
    alignSelf: 'flex-end' }, // alinhando a data a direita do container
    itemTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 8,
    marginTop: 8,
    color: '#000000', },
    itemDescription: {
    fontSize: 14,
    color: '#ffffff' }
    
});