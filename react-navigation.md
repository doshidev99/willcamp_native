### Moving between screen
  - use props navigation
  - Navigate to a route multiple times#
    example: navigation.navigate('name-screen') 
  - Going back#
    example: navigation.goBack()

### Passing parameters to routes
  example: 
  ```
    navigation.navigate('Details', {
      itemId: 86,
      otherParam: 'anything you want here',
    });
          
  ```

  - Updating params#
  example:
  ```
    navigation.setParams({
      query: 'someText',
    })
  ```

### Initial params#
  ```
    <Stack.Screen
      name="Details"
      component={DetailsScreen}
      initialParams={{ itemId: 42 }}
    />
  ```
