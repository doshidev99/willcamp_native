import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 40,
  },

  input: {
    height: 50,
    width: '60%',
    margin: 20,
    paddingHorizontal: 20,
    borderWidth: 1,
    color: 'white',
  },
  button: {
    height: 50,
    backgroundColor: 'green',
    paddingHorizontal: 7,
    paddingVertical: 10,
  },
});
