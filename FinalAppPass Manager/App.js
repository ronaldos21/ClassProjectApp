import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet, TextInput, TouchableHighlight, Dimensions, Image, ImageBackground, Button, Switch, Alert, ScrollView } from 'react-native';
import { DataTable } from 'react-native-paper';
import Constants from 'expo-constants';

//custom components
import AppIcon from "./components/AppIcon";
import Header from "./components/Header";
import PassIcon from "./components/PassIcon";

let deviceHeight = Dimensions.get('screen').height; //667
let deviceWidth = Dimensions.get('screen').width; //375
var password = 'default';
var editCounter = 0;
var counter = 0;
var passwordCounter = 0;
var passArray = [];

export default class App extends Component {
    constructor(props) {
        super(props);
        this.toggleSwitch = this.toggleSwitch.bind(this);
        this.state={
            pswd: '',
            status: 'not logged in',
            ptry: 'enter the password',

            //display
            loginPageDisplay: 'block', //where the user logs in
            profilePageDisplay: 'none', //where the user can view their profile
            accountsPageDisplay: 'none', //where accounts can be viewed and added
            navbarDisplay: 'none', //user uses this to switch pages
              //addaccount displays
              addAccPageDisplay0: 'none',
              addAccPageDisplay1: 'none',
              addAccPageDisplay2: 'none',
              addAccPageDisplay3: 'none',
              addAccPageDisplay4: 'none',
              addAccPageDisplay5: 'none',
              addAccPageDisplay6: 'none',
              addAccPageDisplay7: 'none',
              addAccPageDisplay8: 'none',
              addAccPageDisplay9: 'none',
              addAccPageDisplay10: 'none',

            //login page info
            password: ' password',
            inputValue: 'You can change me!',

            //passwords
            showPassword: true,

            //accounts
              //acc0
                acc0: '',
                em0: '',
                p0: '',
              //acc2
                acc1: '',
                em1: '',
                p1: '',
              //acc2
                acc2: '',
                em2: '',
                p2: '',
              //acc3
                acc3: '',
                em3: '',
                p3: '',
              //acc4
                acc4: '',
                em4: '',
                p4: '',
              //acc5
                acc5: '',
                em5: '',
                p5: '',
              //acc6
                acc6: '',
                em6: '',
                p6: '',
              //acc7
                acc7: '',
                em7: '',
                p7: '',
              //acc8
                acc8: '',
                em8: '',
                p8: '',
              //acc9
                acc9: '',
                em9: '',
                p9: '',
              //acc10
                acc10: '',
                em10: '',
                p10: '',
        };
    }
    
    //showing passwords
    toggleSwitch(){
      this.setState({ showPassword: !this.state.showPassword });
    }

    //setting and checking login password
    setPswd = () => {
        password = this.state.pswd; //pswd is set in profiles SET
    }
    
    tryPswd = () => {
        var tryP = this.state.ptry;
        if (tryP == password) {
            this.setState(state => ({
              loginPageDisplay: 'none',
              profilePageDisplay: 'none',
              addAccPageDisplay0: 'none',
              accountsPageDisplay: 'block',
              navbarDisplay: 'block',
            }))
            //this.setState({status:"loged in"})
        } else {
            this.setState({status: "ERROR: TRY AGAIN"})
        }
    }

    //displays
    loginPageDefault = () => {
        this.setState({
            loginPageDisplay: 'block',
            profilePageDisplay: 'none',
            accountsPageDisplay: 'none',
            navbarDisplay: 'none',
            addAccPageDisplay0: 'none',
            addAccPageDisplay1: 'none',
            addAccPageDisplay2: 'none',
            addAccPageDisplay3: 'none',
            addAccPageDisplay4: 'none',
            addAccPageDisplay5: 'none',
            addAccPageDisplay6: 'none',
            addAccPageDisplay7: 'none',
            addAccPageDisplay8: 'none',
            addAccPageDisplay9: 'none',
            addAccPageDisplay10: 'none',
        })
    }

    handleProfilePress = () => this.setState(state => ({
        loginPageDisplay: 'none',
        profilePageDisplay: 'block',
        accountsPageDisplay: 'none',
        navbarDisplay: 'block',
        addAccPageDisplay0: 'none',
    }));

    handleAccountsPress = () => this.setState(state => ({
        loginPageDisplay: 'none',
        profilePageDisplay: 'none',
        accountsPageDisplay: 'block',
        navbarDisplay: 'block',
        addAccPageDisplay0: 'none',
        addAccPageDisplay1: 'none',
        addAccPageDisplay2: 'none',
        addAccPageDisplay3: 'none',
        addAccPageDisplay4: 'none',
        addAccPageDisplay5: 'none',
        addAccPageDisplay6: 'none',
        addAccPageDisplay7: 'none',
        addAccPageDisplay8: 'none',
        addAccPageDisplay9: 'none',
        addAccPageDisplay10: 'none',
    }));

    handleAddAccPress = () => {
      switch (counter) {
      case 0:
        this.setState({
          loginPageDisplay: 'none',
          profilePageDisplay: 'none',
          accountsPageDisplay: 'none',
          navbarDisplay: 'block',
          addAccPageDisplay0: 'block',
        });
        counter = counter + 1;
        break;
      case 1:
        this.setState({
          loginPageDisplay: 'none',
          profilePageDisplay: 'none',
          accountsPageDisplay: 'none',
          navbarDisplay: 'block',
          addAccPageDisplay1: 'block',
          addAccPageDisplay0: 'none',
        });
        counter = counter + 1;
        break;
      case 2:
        this.setState({
          loginPageDisplay: 'none',
          profilePageDisplay: 'none',
          accountsPageDisplay: 'none',
          navbarDisplay: 'block',
          addAccPageDisplay2: 'block',
          addAccPageDisplay1: 'none',
          addAccPageDisplay0: 'none',
        });
        counter = counter + 1;
        break;
      case 3:
        this.setState({
          loginPageDisplay: 'none',
          profilePageDisplay: 'none',
          accountsPageDisplay: 'none',
          navbarDisplay: 'block',
          addAccPageDisplay3: 'block',
          addAccPageDisplay2: 'none',
          addAccPageDisplay1: 'none',
          addAccPageDisplay0: 'none',
        });
        counter = counter + 1;
        break;
      case 4:
        this.setState({
          loginPageDisplay: 'none',
          profilePageDisplay: 'none',
          accountsPageDisplay: 'none',
          navbarDisplay: 'block',
          addAccPageDisplay4: 'block',
          addAccPageDisplay3: 'none',
          addAccPageDisplay2: 'none',
          addAccPageDisplay1: 'none',
          addAccPageDisplay0: 'none',
        });
        counter = counter + 1;
        break;
      case 5:
        this.setState({
          loginPageDisplay: 'none',
          profilePageDisplay: 'none',
          accountsPageDisplay: 'none',
          navbarDisplay: 'block',
          addAccPageDisplay5: 'block',
          addAccPageDisplay4: 'none',
          addAccPageDisplay3: 'none',
          addAccPageDisplay2: 'none',
          addAccPageDisplay1: 'none',
          addAccPageDisplay0: 'none',
        });
        counter = counter + 1;
        break;
      case 6:
        this.setState({
          loginPageDisplay: 'none',
          profilePageDisplay: 'none',
          accountsPageDisplay: 'none',
          navbarDisplay: 'block',
          addAccPageDisplay6: 'block',
          addAccPageDisplay5: 'none',
          addAccPageDisplay4: 'none',
          addAccPageDisplay3: 'none',
          addAccPageDisplay2: 'none',
          addAccPageDisplay1: 'none',
          addAccPageDisplay0: 'none',
        });
        counter = counter + 1;
        break;
      case 7:
        this.setState({
          loginPageDisplay: 'none',
          profilePageDisplay: 'none',
          accountsPageDisplay: 'none',
          navbarDisplay: 'block',
          addAccPageDisplay7: 'block',
          addAccPageDisplay6: 'none',
          addAccPageDisplay5: 'none',
          addAccPageDisplay4: 'none',
          addAccPageDisplay3: 'none',
          addAccPageDisplay2: 'none',
          addAccPageDisplay1: 'none',
          addAccPageDisplay0: 'none',
        });
        counter = counter + 1;
        break;
      case 8:
        this.setState({
          loginPageDisplay: 'none',
          profilePageDisplay: 'none',
          accountsPageDisplay: 'none',
          navbarDisplay: 'block',
          addAccPageDisplay8: 'block',
          addAccPageDisplay7: 'none',
          addAccPageDisplay6: 'none',
          addAccPageDisplay5: 'none',
          addAccPageDisplay4: 'none',
          addAccPageDisplay3: 'none',
          addAccPageDisplay2: 'none',
          addAccPageDisplay1: 'none',
          addAccPageDisplay0: 'none',
        });
        counter = counter + 1;
        break;
      case 9:
        this.setState({
          loginPageDisplay: 'none',
          profilePageDisplay: 'none',
          accountsPageDisplay: 'none',
          navbarDisplay: 'block',
          addAccPageDisplay9: 'block',
          addAccPageDisplay8: 'none',
          addAccPageDisplay7: 'none',
          addAccPageDisplay6: 'none',
          addAccPageDisplay5: 'none',
          addAccPageDisplay4: 'none',
          addAccPageDisplay3: 'none',
          addAccPageDisplay2: 'none',
          addAccPageDisplay1: 'none',
          addAccPageDisplay0: 'none',
        });
        counter = counter + 1;
        break;
      case 10:
        this.setState({
          loginPageDisplay: 'none',
          profilePageDisplay: 'none',
          accountsPageDisplay: 'none',
          navbarDisplay: 'block',
          addAccPageDisplay10: 'block',
          addAccPageDisplay9: 'none',
          addAccPageDisplay8: 'none',
          addAccPageDisplay7: 'none',
          addAccPageDisplay6: 'none',
          addAccPageDisplay5: 'none',
          addAccPageDisplay4: 'none',
          addAccPageDisplay3: 'none',
          addAccPageDisplay2: 'none',
          addAccPageDisplay1: 'none',
          addAccPageDisplay0: 'none',
        });
        counter = counter + 1;
        break;
    }
  };

    handleBackAccPress = () => {
      switch (
        (editCounter = counter - 1) //--counter+1
      ) {
        case 0:
          this.setState({
            loginPageDisplay: 'none',
            profilePageDisplay: 'none',
            accountsPageDisplay: 'none',
            navbarDisplay: 'block',
            addAccPageDisplay10: 'none',
            addAccPageDisplay9: 'none',
            addAccPageDisplay8: 'none',
            addAccPageDisplay7: 'none',
            addAccPageDisplay6: 'none',
            addAccPageDisplay5: 'none',
            addAccPageDisplay4: 'none',
            addAccPageDisplay3: 'none',
            addAccPageDisplay2: 'none',
            addAccPageDisplay1: 'none',
            addAccPageDisplay0: 'block',
          });

          editCounter = --counter; //new method counter--:  counter - 1;
          break;
        case 1:
          this.setState({
            loginPageDisplay: 'none',
            profilePageDisplay: 'none',
            accountsPageDisplay: 'none',
            navbarDisplay: 'block',
            addAccPageDisplay10: 'none',
            addAccPageDisplay9: 'none',
            addAccPageDisplay8: 'none',
            addAccPageDisplay7: 'none',
            addAccPageDisplay6: 'none',
            addAccPageDisplay5: 'none',
            addAccPageDisplay4: 'none',
            addAccPageDisplay3: 'none',
            addAccPageDisplay2: 'none',
            addAccPageDisplay1: 'block',
            addAccPageDisplay0: 'none',
          });
          editCounter = --counter;
          break;
        case 2:
          this.setState({
            loginPageDisplay: 'none',
            profilePageDisplay: 'none',
            accountsPageDisplay: 'none',
            navbarDisplay: 'block',
            addAccPageDisplay10: 'none',
            addAccPageDisplay9: 'none',
            addAccPageDisplay8: 'none',
            addAccPageDisplay7: 'none',
            addAccPageDisplay6: 'none',
            addAccPageDisplay5: 'none',
            addAccPageDisplay4: 'none',
            addAccPageDisplay3: 'none',
            addAccPageDisplay2: 'block',
            addAccPageDisplay1: 'none',
            addAccPageDisplay0: 'none',
            // editAccPage: 'block',
          });
          editCounter = --counter;
          break;

        case 3:
          this.setState({
            loginPageDisplay: 'none',
            profilePageDisplay: 'none',
            accountsPageDisplay: 'none',
            navbarDisplay: 'block',
            addAccPageDisplay10: 'none',
            addAccPageDisplay9: 'none',
            addAccPageDisplay8: 'none',
            addAccPageDisplay7: 'none',
            addAccPageDisplay6: 'none',
            addAccPageDisplay5: 'none',
            addAccPageDisplay4: 'none',
            addAccPageDisplay3: 'block',
            addAccPageDisplay2: 'none',
            addAccPageDisplay1: 'none',
            addAccPageDisplay0: 'none',
          });
          editCounter = --counter;
          break;

        case 4:
          this.setState({
            loginPageDisplay: 'none',
            profilePageDisplay: 'none',
            accountsPageDisplay: 'none',
            navbarDisplay: 'block',
            addAccPageDisplay10: 'none',
            addAccPageDisplay9: 'none',
            addAccPageDisplay8: 'none',
            addAccPageDisplay7: 'none',
            addAccPageDisplay6: 'none',
            addAccPageDisplay5: 'none',
            addAccPageDisplay4: 'block',
            addAccPageDisplay3: 'none',
            addAccPageDisplay2: 'none',
            addAccPageDisplay1: 'none',
            addAccPageDisplay0: 'none',
          });
          editCounter = --counter;
          break;

        case 5:
          this.setState({
            loginPageDisplay: 'none',
            profilePageDisplay: 'none',
            accountsPageDisplay: 'none',
            navbarDisplay: 'block',
            addAccPageDisplay10: 'none',
            addAccPageDisplay9: 'none',
            addAccPageDisplay8: 'none',
            addAccPageDisplay7: 'none',
            addAccPageDisplay6: 'none',
            addAccPageDisplay5: 'block',
            addAccPageDisplay4: 'none',
            addAccPageDisplay3: 'none',
            addAccPageDisplay2: 'none',
            addAccPageDisplay1: 'none',
            addAccPageDisplay0: 'none',
          });
          editCounter = --counter;
          break;

        case 6:
          this.setState({
            loginPageDisplay: 'none',
            profilePageDisplay: 'none',
            accountsPageDisplay: 'none',
            navbarDisplay: 'block',
            addAccPageDisplay10: 'none',
            addAccPageDisplay9: 'none',
            addAccPageDisplay8: 'none',
            addAccPageDisplay7: 'none',
            addAccPageDisplay6: 'block',
            addAccPageDisplay5: 'none',
            addAccPageDisplay4: 'none',
            addAccPageDisplay3: 'none',
            addAccPageDisplay2: 'none',
            addAccPageDisplay1: 'none',
            addAccPageDisplay0: 'none',
          });
          editCounter = --counter;
          break;

        case 7:
          this.setState({
            loginPageDisplay: 'none',
            profilePageDisplay: 'none',
            accountsPageDisplay: 'none',
            navbarDisplay: 'block',
            addAccPageDisplay10: 'none',
            addAccPageDisplay9: 'none',
            addAccPageDisplay8: 'none',
            addAccPageDisplay7: 'block',
            addAccPageDisplay6: 'none',
            addAccPageDisplay5: 'none',
            addAccPageDisplay4: 'none',
            addAccPageDisplay3: 'none',
            addAccPageDisplay2: 'none',
            addAccPageDisplay1: 'none',
            addAccPageDisplay0: 'none',
          });
          editCounter = --counter;
          break;

        case 8:
          this.setState({
            loginPageDisplay: 'none',
            profilePageDisplay: 'none',
            accountsPageDisplay: 'none',
            navbarDisplay: 'block',
            addAccPageDisplay10: 'none',
            addAccPageDisplay9: 'none',
            addAccPageDisplay8: 'block',
            addAccPageDisplay7: 'none',
            addAccPageDisplay6: 'none',
            addAccPageDisplay5: 'none',
            addAccPageDisplay4: 'none',
            addAccPageDisplay3: 'none',
            addAccPageDisplay2: 'none',
            addAccPageDisplay1: 'none',
            addAccPageDisplay0: 'none',
          });
          editCounter = --counter;
          break;

        case 9:
          this.setState({
            loginPageDisplay: 'none',
            profilePageDisplay: 'none',
            accountsPageDisplay: 'none',
            navbarDisplay: 'block',
            addAccPageDisplay10: 'none',
            addAccPageDisplay9: 'block',
            addAccPageDisplay8: 'none',
            addAccPageDisplay7: 'none',
            addAccPageDisplay6: 'none',
            addAccPageDisplay5: 'none',
            addAccPageDisplay4: 'none',
            addAccPageDisplay3: 'none',
            addAccPageDisplay2: 'none',
            addAccPageDisplay1: 'none',
            addAccPageDisplay0: 'none',
          });
          editCounter = --counter;
          break;

        case 10:
          this.setState({
            loginPageDisplay: 'none',
            profilePageDisplay: 'none',
            accountsPageDisplay: 'none',
            navbarDisplay: 'block',
            addAccPageDisplay10: 'block',
            addAccPageDisplay9: 'none',
            addAccPageDisplay8: 'none',
            addAccPageDisplay7: 'none',
            addAccPageDisplay6: 'none',
            addAccPageDisplay5: 'none',
            addAccPageDisplay4: 'none',
            addAccPageDisplay3: 'none',
            addAccPageDisplay2: 'none',
            addAccPageDisplay1: 'none',
            addAccPageDisplay0: 'none',
          });
          editCounter = --counter;
          break;
      }
  };

    addAccount = () => {
        this.setState({
          addAccPageDisplay10: 'none',
          addAccPageDisplay9: 'none',
          addAccPageDisplay8: 'none',
          addAccPageDisplay7: 'none',
          addAccPageDisplay6: 'none',
          addAccPageDisplay5: 'none',
          addAccPageDisplay4: 'none',
          addAccPageDisplay3: 'none',
          addAccPageDisplay2: 'none',
          addAccPageDisplay1: 'none',
          addAccPageDisplay0: 'none',
          accountsPageDisplay: 'block',
        })
        passwordCounter = passwordCounter + 1;

        switch (passwordCounter) {
          case 1: 
            for (var a = 0; a < passArray.length; a++) {
              if(this.state.p0 === passArray[a]) {
                Alert.alert("SECURITY RISK: You have used this password already, pick a different password for Account #1.")
              } else continue;
            }
            passArray.push( this.state.p0.toString() );
            //Alert.alert(passArray.toString());
            break;
          case 2: 
            for (var b = 0; b < passArray.length; b++) {
              if(this.state.p1 === passArray[b]) {
                Alert.alert("SECURITY RISK: You have used this password already, pick a different password for Account #2.")
              } else continue;
            }
            break;
          case 3: 
            for (var c = 0; c < passArray.length; c++) {
              if(this.state.p2 === passArray[c]) {
                Alert.alert("SECURITY RISK: You have used this password already, pick a different password for Account #3.")
              } else continue;
            }
            break;
          case 4: 
            for (var d = 0; d < passArray.length; d++) {
              if(this.state.p3 === passArray[d]) {
                Alert.alert("SECURITY RISK: You have used this password already, pick a different password for Account #4.")
              } else continue;
            }
            break;
          case 5: 
            for (var e = 0; e < passArray.length; e++) {
              if(this.state.p4 === passArray[e]) {
                Alert.alert("SECURITY RISK: You have used this password already, pick a different password for Account #5.")
              } else continue;
            }
            break;
          case 6: 
            for (var f = 0; f < passArray.length; f++) {
              if(this.state.p5 === passArray[f]) {
                Alert.alert("SECURITY RISK: You have used this password already, pick a different password for Account #6.")
              } else continue;
            }
            break;
          case 7: 
            for (var g = 0; g < passArray.length; g++) {
              if(this.state.p6 === passArray[g]) {
                Alert.alert("SECURITY RISK: You have used this password already, pick a different password for Account #7.")
              } else continue;
            }
            break;
          case 8: 
            for (var h = 0; h < passArray.length; h++) {
              if(this.state.p7 === passArray[h]) {
                Alert.alert("SECURITY RISK: You have used this password already, pick a different password for Account #8.")
              } else continue;
            }
            break;
          case 9: 
            for (var i = 0; i < passArray.length; i++) {
              if(this.state.p8 === passArray[i]) {
                Alert.alert("SECURITY RISK: You have used this password already, pick a different password for Account #9.")
              } else continue;
            }
            break;
          case 10: 
            for (var j = 0; j < passArray.length; j++) {
              if(this.state.p9 === passArray[j]) {
                Alert.alert("SECURITY RISK: You have used this password already, pick a different password for Account #10.")
              } else continue;
            }
            break;
          case 11: 
            for (var k = 0; k < passArray.length; k++) {
              if(this.state.p10 === passArray[k]) {
                Alert.alert("SECURITY RISK: You have used this password already, pick a different password for Account #11.")
              } else continue;
            }
            break;
          case 12: 
            for (var l = 0; l < passArray.length; l++) {
              if(this.state.p11 === passArray[l]) {
                Alert.alert("SECURITY RISK: You have used this password already, pick a different password for Account #12.")
              } else continue;
            }
            break;
      }
    }

    _handleTextChange = inputValue => {
        this.setState({ inputValue });
    };

    render() {
        return (
            <ImageBackground source={require('./assets/business-background-image-PixTeller.png')} style={styles.container}>
          {/*Login page screen layout here*/}
            <View style={{ display: this.state.loginPageDisplay }}>
                <Header />
                
                <View style={styles.inputContainer}>
                   <View style={styles.userAndPassContainer}>
                        <PassIcon />
                        <TextInput style={styles.textInput}
                          secureTextEntry={this.state.showPassword}
                          onChangeText={(ptry=>this.setState({ptry}))}
                          value = {this.state.ptry}>
                        </TextInput>
                    </View>
                    <Switch
                          onValueChange = {this.toggleSwitch}
                          value={this.state.showPassword}
                    />
                </View>    
                
                <View style={styles.loginContainer}>
                    <TouchableHighlight style={styles.loginButton}
                      onPress={this.tryPswd}
                    >
                      <Text style={styles.loginText}>
                          LOGIN
                      </Text>
                    </TouchableHighlight>
                </View>
            </View>
            
          {/*Accounts page screen layout here*/}
            <View style={{ display: this.state.accountsPageDisplay }}>
              <View style={styles.tableContentContainer}>
              {/*got datatable from https://callstack.github.io/react-native-paper/data-table.html*/}
                <DataTable style={styles.tableDisplay}>
                  <DataTable.Header>
                    <DataTable.Title>Account</DataTable.Title>
                    <DataTable.Title>Email</DataTable.Title>
                    <DataTable.Title>Password</DataTable.Title>
                  </DataTable.Header>
                  <ScrollView>
                  <DataTable.Row>
                    <DataTable.Cell>{this.state.acc0}</DataTable.Cell>
                    <DataTable.Cell>{this.state.em0}</DataTable.Cell>
                    <DataTable.Cell>{this.state.p0}</DataTable.Cell>
                  </DataTable.Row>
                  <DataTable.Row>
                    <DataTable.Cell>{this.state.acc1}</DataTable.Cell>
                    <DataTable.Cell>{this.state.em1}</DataTable.Cell>
                    <DataTable.Cell>{this.state.p1}</DataTable.Cell>
                  </DataTable.Row>
                  <DataTable.Row>
                    <DataTable.Cell>{this.state.acc2}</DataTable.Cell>
                    <DataTable.Cell>{this.state.em2}</DataTable.Cell>
                    <DataTable.Cell>{this.state.p2}</DataTable.Cell>
                  </DataTable.Row>
                  <DataTable.Row>
                    <DataTable.Cell>{this.state.acc3}</DataTable.Cell>
                    <DataTable.Cell>{this.state.em3}</DataTable.Cell>
                    <DataTable.Cell>{this.state.p3}</DataTable.Cell>
                  </DataTable.Row>
                  <DataTable.Row>
                    <DataTable.Cell>{this.state.acc4}</DataTable.Cell>
                    <DataTable.Cell>{this.state.em4}</DataTable.Cell>
                    <DataTable.Cell>{this.state.p4}</DataTable.Cell>
                  </DataTable.Row>
                  <DataTable.Row>
                    <DataTable.Cell>{this.state.acc5}</DataTable.Cell>
                    <DataTable.Cell>{this.state.em5}</DataTable.Cell>
                    <DataTable.Cell>{this.state.p5}</DataTable.Cell>
                  </DataTable.Row>
                  <DataTable.Row>
                    <DataTable.Cell>{this.state.acc6}</DataTable.Cell>
                    <DataTable.Cell>{this.state.em6}</DataTable.Cell>
                    <DataTable.Cell>{this.state.p6}</DataTable.Cell>
                  </DataTable.Row>
                  <DataTable.Row>
                    <DataTable.Cell>{this.state.acc7}</DataTable.Cell>
                    <DataTable.Cell>{this.state.em7}</DataTable.Cell>
                    <DataTable.Cell>{this.state.p7}</DataTable.Cell>
                  </DataTable.Row>
                  <DataTable.Row>
                    <DataTable.Cell>{this.state.acc8}</DataTable.Cell>
                    <DataTable.Cell>{this.state.em8}</DataTable.Cell>
                    <DataTable.Cell>{this.state.p8}</DataTable.Cell>
                  </DataTable.Row>
                  <DataTable.Row>
                    <DataTable.Cell>{this.state.acc9}</DataTable.Cell>
                    <DataTable.Cell>{this.state.em9}</DataTable.Cell>
                    <DataTable.Cell>{this.state.p9}</DataTable.Cell>
                  </DataTable.Row>
                  <DataTable.Row>
                    <DataTable.Cell>{this.state.acc10}</DataTable.Cell>
                    <DataTable.Cell>{this.state.em10}</DataTable.Cell>
                    <DataTable.Cell>{this.state.p10}</DataTable.Cell>
                  </DataTable.Row>
                  </ScrollView>
                </DataTable>
              </View>
            </View>

          {/*add account page screen layout here*/}
            <View style={{ display: this.state.addAccPageDisplay0 }}>
              <View style={styles.contentContainer}>
                <Text style={styles.subtitles}>Enter Account Information for Account 1</Text>
                <TextInput
                  style={styles.textInput}
                  placeholder="Enter an account..."
                  onChangeText={(acc0) => this.setState({ acc0 })}></TextInput>
                <TextInput
                  style={styles.textInput}
                  placeholder="Enter an email account..."
                  onChangeText={(em0) => this.setState({ em0 })}></TextInput>
                <TextInput
                  style={styles.textInput}
                  placeholder="Enter a password..."
                  onChangeText={(p0) => this.setState({ p0 })}></TextInput>
                <TouchableHighlight
                  style={styles.navButton}
                  onPress={this.addAccount}>
                  <Text style={styles.navText}>ADD</Text>
                </TouchableHighlight>
                <TouchableHighlight
                  style={styles.navButton}
                  onPress={this.handleBackAccPress}>
                  <Text style={styles.navText}>Back</Text>
                </TouchableHighlight>
                <TouchableHighlight
                  style={styles.navButton}
                  onPress={this.handleAddAccPress}>
                  <Text style={styles.navText}>Next</Text>
                </TouchableHighlight>
              </View>
            </View>
            <View style={{ display: this.state.addAccPageDisplay1 }}>
              <View style={styles.contentContainer}>
                <Text style={styles.subtitles}>Enter Account Information for Account 2</Text>
                <TextInput style={styles.textInput}
                  placeholder="Enter an account..."
                  onChangeText={(acc1=>this.setState({acc1}))}>
                </TextInput>
                <TextInput style={styles.textInput}
                  placeholder="Enter an email..."
                  onChangeText={(em1=>this.setState({em1}))}>
                </TextInput>
                <TextInput style={styles.textInput}
                  placeholder="Enter a password..."
                  onChangeText={(p1=>this.setState({p1}))}>
                </TextInput>
                <TouchableHighlight
                  style={styles.navButton}
                  onPress={this.addAccount}>
                  <Text style={styles.navText}>ADD</Text>
                </TouchableHighlight>
                <TouchableHighlight
                  style={styles.navButton}
                  onPress={this.handleBackAccPress}>
                  <Text style={styles.navText}>Back</Text>
                </TouchableHighlight>
                <TouchableHighlight
                  style={styles.navButton}
                  onPress={this.handleAddAccPress}>
                  <Text style={styles.navText}>Next</Text>
                </TouchableHighlight>
              </View>
            </View>
            <View style={{ display: this.state.addAccPageDisplay2 }}>
              <View style={styles.contentContainer}>
                <Text style={styles.subtitles}>Enter Account Information for Account 3</Text>
                <TextInput style={styles.textInput}
                  placeholder="Enter an account..."
                  onChangeText={(acc2=>this.setState({acc2}))}>
                </TextInput>
                <TextInput style={styles.textInput}
                  placeholder="Enter an email..."
                  onChangeText={(em2=>this.setState({em2}))}>
                </TextInput>
                <TextInput style={styles.textInput}
                  placeholder="Enter a password..."
                  onChangeText={(p2=>this.setState({p2}))}>
                </TextInput>
                <TouchableHighlight
                  style={styles.navButton}
                  onPress={this.addAccount}>
                  <Text style={styles.navText}>ADD</Text>
                </TouchableHighlight>
                <TouchableHighlight
                  style={styles.navButton}
                  onPress={this.handleBackAccPress}>
                  <Text style={styles.navText}>Back</Text>
                </TouchableHighlight>
                <TouchableHighlight
                  style={styles.navButton}
                  onPress={this.handleAddAccPress}>
                  <Text style={styles.navText}>Next</Text>
                </TouchableHighlight>
              </View>
            </View>
            <View style={{ display: this.state.addAccPageDisplay3 }}>
              <View style={styles.contentContainer}>
                <Text style={styles.subtitles}>Enter Account Information for Account 4</Text>
                <TextInput style={styles.textInput}
                  placeholder="Enter an account..."
                  onChangeText={(acc3=>this.setState({acc3}))}>
                </TextInput>
                <TextInput style={styles.textInput}
                  placeholder="Enter an email..."
                  onChangeText={(em3=>this.setState({em3}))}>
                </TextInput>
                <TextInput style={styles.textInput}
                  placeholder="Enter a password..."
                  onChangeText={(p3=>this.setState({p3}))}>
                </TextInput>
                <TouchableHighlight
                  style={styles.navButton}
                  onPress={this.addAccount}>
                  <Text style={styles.navText}>ADD</Text>
                </TouchableHighlight>
                <TouchableHighlight
                  style={styles.navButton}
                  onPress={this.handleBackAccPress}>
                  <Text style={styles.navText}>Back</Text>
                </TouchableHighlight>
                <TouchableHighlight
                  style={styles.navButton}
                  onPress={this.handleAddAccPress}>
                  <Text style={styles.navText}>Next</Text>
                </TouchableHighlight>
              </View>
            </View>
            <View style={{ display: this.state.addAccPageDisplay4 }}>
              <View style={styles.contentContainer}>
                <Text style={styles.subtitles}>Enter Account Information for Account 5</Text>
                <TextInput style={styles.textInput}
                  placeholder="Enter an account..."
                  onChangeText={(acc4=>this.setState({acc4}))}>
                </TextInput>
                <TextInput style={styles.textInput}
                  placeholder="Enter an email..."
                  onChangeText={(em4=>this.setState({em4}))}>
                </TextInput>
                <TextInput style={styles.textInput}
                  placeholder="Enter a password..."
                  onChangeText={(p4=>this.setState({p4}))}>
                </TextInput>
                <TouchableHighlight
                  style={styles.navButton}
                  onPress={this.addAccount}>
                  <Text style={styles.navText}>ADD</Text>
                </TouchableHighlight>
                <TouchableHighlight
                  style={styles.navButton}
                  onPress={this.handleBackAccPress}>
                  <Text style={styles.navText}>Back</Text>
                </TouchableHighlight>
                <TouchableHighlight
                  style={styles.navButton}
                  onPress={this.handleAddAccPress}>
                  <Text style={styles.navText}>Next</Text>
                </TouchableHighlight>
              </View>
            </View>
            <View style={{ display: this.state.addAccPageDisplay5 }}>
              <View style={styles.contentContainer}>
                <Text style={styles.subtitles}>Enter Account Information for Account 6</Text>
                <TextInput style={styles.textInput}
                  placeholder="Enter an account..."
                  onChangeText={(acc5=>this.setState({acc5}))}>
                </TextInput>
                <TextInput style={styles.textInput}
                  placeholder="Enter an email..."
                  onChangeText={(em5=>this.setState({em5}))}>
                </TextInput>
                <TextInput style={styles.textInput}
                  placeholder="Enter a password..."
                  onChangeText={(p5=>this.setState({p5}))}>
                </TextInput>
                <TouchableHighlight
                  style={styles.navButton}
                  onPress={this.addAccount}>
                  <Text style={styles.navText}>ADD</Text>
                </TouchableHighlight>
                <TouchableHighlight
                  style={styles.navButton}
                  onPress={this.handleBackAccPress}>
                  <Text style={styles.navText}>Back</Text>
                </TouchableHighlight>
                <TouchableHighlight
                  style={styles.navButton}
                  onPress={this.handleAddAccPress}>
                  <Text style={styles.navText}>Next</Text>
                </TouchableHighlight>
              </View>
            </View>
            <View style={{ display: this.state.addAccPageDisplay6 }}>
              <View style={styles.contentContainer}>
                <Text style={styles.subtitles}>Enter Account Information for Account 7</Text>
                <TextInput style={styles.textInput}
                  placeholder="Enter an account..."
                  onChangeText={(acc6=>this.setState({acc6}))}>
                </TextInput>
                <TextInput style={styles.textInput}
                  placeholder="Enter an email..."
                  onChangeText={(em6=>this.setState({em6}))}>
                </TextInput>
                <TextInput style={styles.textInput}
                  placeholder="Enter a password..."
                  onChangeText={(p6=>this.setState({p6}))}>
                </TextInput>
                <TouchableHighlight
                  style={styles.navButton}
                  onPress={this.addAccount}>
                  <Text style={styles.navText}>ADD</Text>
                </TouchableHighlight>
                <TouchableHighlight
                  style={styles.navButton}
                  onPress={this.handleBackAccPress}>
                  <Text style={styles.navText}>Back</Text>
                </TouchableHighlight>
                <TouchableHighlight
                  style={styles.navButton}
                  onPress={this.handleAddAccPress}>
                  <Text style={styles.navText}>Next</Text>
                </TouchableHighlight>
              </View>
            </View>
            <View style={{ display: this.state.addAccPageDisplay7 }}>
              <View style={styles.contentContainer}>
                <Text style={styles.subtitles}>Enter Account Information for Account 8</Text>
                <TextInput style={styles.textInput}
                  placeholder="Enter an account..."
                  onChangeText={(acc7=>this.setState({acc7}))}>
                </TextInput>
                <TextInput style={styles.textInput}
                  placeholder="Enter an email..."
                  onChangeText={(em7=>this.setState({em7}))}>
                </TextInput>
                <TextInput style={styles.textInput}
                  placeholder="Enter a password..."
                  onChangeText={(p7=>this.setState({p7}))}>
                </TextInput>
                <TouchableHighlight
                  style={styles.navButton}
                  onPress={this.addAccount}>
                  <Text style={styles.navText}>ADD</Text>
                </TouchableHighlight>
                <TouchableHighlight
                  style={styles.navButton}
                  onPress={this.handleBackAccPress}>
                  <Text style={styles.navText}>Back</Text>
                </TouchableHighlight>
                <TouchableHighlight
                  style={styles.navButton}
                  onPress={this.handleAddAccPress}>
                  <Text style={styles.navText}>Next</Text>
                </TouchableHighlight>
              </View>
            </View>
            <View style={{ display: this.state.addAccPageDisplay8 }}>
              <View style={styles.contentContainer}>
                <Text style={styles.subtitles}>Enter Account Information for Account 9</Text>
                <TextInput style={styles.textInput}
                  placeholder="Enter an account..."
                  onChangeText={(acc8=>this.setState({acc8}))}>
                </TextInput>
                <TextInput style={styles.textInput}
                  placeholder="Enter an email..."
                  onChangeText={(em8=>this.setState({em8}))}>
                </TextInput>
                <TextInput style={styles.textInput}
                  placeholder="Enter a password..."
                  onChangeText={(p8=>this.setState({p8}))}>
                </TextInput>
                <TouchableHighlight
                  style={styles.navButton}
                  onPress={this.addAccount}>
                  <Text style={styles.navText}>ADD</Text>
                </TouchableHighlight>
                <TouchableHighlight
                  style={styles.navButton}
                  onPress={this.handleBackAccPress}>
                  <Text style={styles.navText}>Back</Text>
                </TouchableHighlight>
                <TouchableHighlight
                  style={styles.navButton}
                  onPress={this.handleAddAccPress}>
                  <Text style={styles.navText}>Next</Text>
                </TouchableHighlight>
              </View>
            </View>
            <View style={{ display: this.state.addAccPageDisplay9 }}>
              <View style={styles.contentContainer}>
                <Text style={styles.subtitles}>Enter Account Information for Account 10</Text>
                <TextInput style={styles.textInput}
                  placeholder="Enter an account..."
                  onChangeText={(acc9=>this.setState({acc9}))}>
                </TextInput>
                <TextInput style={styles.textInput}
                  placeholder="Enter an email..."
                  onChangeText={(em9=>this.setState({em9}))}>
                </TextInput>
                <TextInput style={styles.textInput}
                  placeholder="Enter a password..."
                  onChangeText={(p9=>this.setState({p9}))}>
                </TextInput>
                <TouchableHighlight
                  style={styles.navButton}
                  onPress={this.addAccount}>
                  <Text style={styles.navText}>ADD</Text>
                </TouchableHighlight>
                <TouchableHighlight
                  style={styles.navButton}
                  onPress={this.handleBackAccPress}>
                  <Text style={styles.navText}>Back</Text>
                </TouchableHighlight>
                <TouchableHighlight
                  style={styles.navButton}
                  onPress={this.handleAddAccPress}>
                  <Text style={styles.navText}>Next</Text>
                </TouchableHighlight>
              </View>
            </View>
            <View style={{ display: this.state.addAccPageDisplay10 }}>
              <View style={styles.contentContainer}>
                <Text style={styles.subtitles}>Enter Account Information for Account 11</Text>
                <TextInput style={styles.textInput}
                  placeholder="Enter an account..."
                  onChangeText={(acc10=>this.setState({acc10}))}>
                </TextInput>
                <TextInput style={styles.textInput}
                  placeholder="Enter an email..."
                  onChangeText={(em10=>this.setState({em10}))}>
                </TextInput>
                <TextInput style={styles.textInput}
                  placeholder="Enter a password..."
                  onChangeText={(p10=>this.setState({p10}))}>
                </TextInput>
                <TouchableHighlight
                  style={styles.navButton}
                  onPress={this.addAccount}>
                  <Text style={styles.navText}>ADD</Text>
                </TouchableHighlight>
                <TouchableHighlight
                  style={styles.navButton}
                  onPress={this.handleBackAccPress}>
                  <Text style={styles.navText}>Back</Text>
                </TouchableHighlight>
                <TouchableHighlight
                  style={styles.navButton}
                  onPress={this.handleAddAccPress}>
                  <Text style={styles.navText}>Next</Text>
                </TouchableHighlight>
              </View>
            </View>

          {/*Profile page screen layout here*/}
            <View style={{ display: this.state.profilePageDisplay }}>
              <View style={styles.contentContainer}>
                <AppIcon />
                <Text style={styles.subtitles}>
                  Change Login Password
                </Text>
                {/*setting password*/}
                <View style={styles.settingPassword}>
                  <PassIcon />
                  <TextInput style={styles.textInput}
                    secureTextEntry={this.state.showPassword}
                    onChangeText={(pswd=>this.setState({pswd}))}>
                  </TextInput>
                </View>
                <Switch
                  onValueChange = {this.toggleSwitch}
                  value={this.state.showPassword}
                />

                  {/*save button*/}
                <View style={styles.loginContainer}>
                  <TouchableHighlight style={styles.button}
                    onPress={this.setPswd}
                  >
                    <Text style={styles.loginText}>
                      SAVE
                    </Text>
                  </TouchableHighlight>
                </View>

                {/*log out*/}
                <View style={styles.loginContainer}>
                  <TouchableHighlight style={styles.button2}
                    onPress={this.loginPageDefault}
                  >
                    <Text style={styles.loginText}>
                      LOGOUT
                    </Text>
                  </TouchableHighlight>
                </View>
              </View>
            </View>

          {/*Navbar layout here*/}
            <View style={{ display: this.state.navbarDisplay }}>
              <View style={styles.navbarContainer}>
                <TouchableHighlight style={styles.navButton}
                    onPress={this.handleAccountsPress}
                >
                    <Text style={styles.navText}>
                        Accounts
                    </Text>
                </TouchableHighlight>
                <TouchableHighlight style={styles.navButton}
                    onPress={this.handleAddAccPress}
                >
                    <Text style={styles.navText}>
                        Add
                    </Text>
                </TouchableHighlight>
                <TouchableHighlight style={styles.navButton}
                    onPress={this.handleProfilePress}
                >
                    <Text style={styles.navText}>
                        Profile
                    </Text>
                </TouchableHighlight>
              </View>
            </View>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        //justifyContent: 'space-around',
        backgroundColor: '#95c5db', 
    }, 
    paragraph: {
        margin: 24,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#34495e',
    },

  //LOGIN PAGE STYLES
    inputContainer: { //contains textInput, createText, loginButton, loginText
        //flexDirection: 'column',
        alignItems: 'center',
        height: 100,
        marginTop: 65,
    },
    textInput: { //input boxes
        height: deviceWidth/(375/52), //40,
        width: deviceWidth/(375/272), //175,
        fontSize: deviceWidth/(375/18), //13,
        backgroundColor: 'white', //#78a9bf
        borderWidth: 1,
        color: '#73787a',
        fontWeight: 'bold',
        margin: 2,
    },
    userAndPassContainer: {
        flexDirection: 'row',
    },
    loginContainer: {
        marginTop: deviceHeight/40, //15
        alignItems: 'center',
    },
    loginButton: {
        height: deviceWidth/(375/60), //40,
        width: deviceWidth/(375/150), //110,
        backgroundColor: '#55a8cf',
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        //marginTop: 10,
    },
    loginText: {
        fontFamily: 'Avenir Next Condensed', //Avenir Next Condensed, Charter, PT Sans Narrow
        fontSize: deviceWidth/(375/35), //23,
        //fontStyle: 'italic',
        //fontWeight: 'bold',
    },

  //ACCOUNT PAGE STYLES
    contentContainer: {
      height: 5*(deviceHeight/6),
      width: deviceWidth,
      alignItems: 'center',
      justifyContent: 'center',
    },

  //PROFILE PAGE STYLES
    subtitles: {
      fontSize: deviceWidth/10,
      fontFamily: "Charter", //Impact
      fontWeight: 'bold',
      textAlign: 'center',
    },
    button: {
      height: deviceWidth/(375/50), //40,
      width: deviceWidth/(375/100), //110,
      backgroundColor: '#55a8cf',
      borderWidth: 1,
      alignItems: 'center',
      justifyContent: 'center',
      //marginTop: 10,
    },
    button2: {
      height: deviceWidth/(375/50), //40,
      width: deviceWidth/(375/110), //110,
      backgroundColor: '#55a8cf',
      borderWidth: 1,
      alignItems: 'center',
      justifyContent: 'center',
      //marginTop: 10,
    },
    settingPassword: {
      flexDirection: 'row',
      marginTop: deviceHeight/15,
    },

  //ADD ACC PAGE STYLES

  //NAVBAR PAGE STYLES
    navbarContainer: {
      height: deviceHeight/6,
      width: deviceWidth,
      backgroundColor: '#30496A',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      borderTopWidth: 10,
      borderColor: 'white',
    },
    navButton: {
      height: deviceHeight/14,
      width: deviceWidth/4,
      backgroundColor: '#54607D',
      borderColor: 'white',
      borderWidth: 2,
      alignItems: 'center',
      justifyContent: 'center',
      margin: 15,
    },
    navText: {
      fontSize: deviceHeight/40,
      textAlign: 'center',
      color: 'white',
    },
  
  //DISPLAY TABLE STYLES
    tableDisplay: {
      backgroundColor: '#5eabdb',
      height: 5*(deviceHeight/6),
      marginTop: deviceHeight/12,
    },
    tableContentContainer: {
      height: 5*(deviceHeight/6),
      width: deviceWidth,
      alignItems: 'center',
      justifyContent: 'center',
    },
});
