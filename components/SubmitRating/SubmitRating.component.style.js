import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
  text: {
  grid: 1,
  alignItems: 'center',
  color: '$mainBlack',
  fontSize: 20,
  fontWeight: "bold",
  textAlign: "center",
  fontFamily: 'Courier New',
  marginBottom: 10,  
  },
  selectedIcon: {
    fontSize: 50,
  },
  buttonsContainer: {
    padding: 10,
    marginTop: 10,
    marginBottom: 10,
    justifyContent: 'center',
    width: '100%',
  },
  button: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    maxHeight: 50,
    maxWidth: 150,
    backgroundColor: '$mainSalmon',
    marginLeft:20,
    marginRight: 20,
  },
  buttonText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: '$mainWhite',
  }
});