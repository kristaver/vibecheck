import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    height: 'auto',
    width: 'auto',
    maxWidth: 500,
    maxHeight: 1000,
  },
  heading: {
    marginTop: 40,
    color: '$mainBlack',
    fontSize: 40,
    lineHeight: 84,
    paddingLeft: '3rem',
    fontFamily: 'Babydoll',

  },
  menuContainer: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 110,
    width: 170,
    marginLeft: '1rem'
  },
  menuLink: {
    textAlign: 'center',
    color: '$mainSalmon',
    fontSize: '20',
    fontFamily: 'Babydoll',
    borderWidth: 2,
    borderColor: "$mainLightGrey",
    borderRadius: 10,
    marginVertical: '1rem',
    paddingVertical: 'rem',
    width: 150,
  },
  footer: {
    flex: 1,
    height: 180,
    position: 'absolute',
    bottom: 0,
    width: '100%',
    padding: '1rem'
  }
});