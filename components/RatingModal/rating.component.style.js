import EStyleSheet from 'react-native-extended-stylesheet';


export default EStyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
  modalContent: {
    height: "45%",
    width: '100%', 
    backgroundColor:"#fff", 
    justifyContent:"center",
    padding: '1rem'
  },
  prompt: {
    fontSize: '2rem',
    fontFamily: 'Babydoll',
    color: '$mainSalmon',
  },
  icons: {
    fontSize:'3rem',
    paddingLeft: '1rem',
  },
  scale: {
    flex: 1,
    flexDirection: 'row',
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
    backgroundColor: '$mainSalmon',
    marginLeft:20,
    marginRight: 20,
    marginVertical: 20,
  },
  buttonText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: '$mainWhite',
  }
});