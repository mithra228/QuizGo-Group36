import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import {useState} from 'react'
export default function App() {
  const [currentQuestion,setCurrentQuestion]=useState(0);
  const [score,setScore]= useState(0);
  const [showScore,setShowScore]=useState(false)
  const quizData=[
    {
      question:'Which programming language does React use',
      options:['JavaScript','Actionscript','Ruby','Java'],
      answer:'JavaScript'
    },
    {
      question:'The components in React are represented via',
      options:['variable','function','pass by value','selected constant'],
      answer:'function'
    },
    {
      question:'The React library files are stored in which folder within the react application folder',
      options:['save_react','node_modules','mode_modules','react_modules'],
      answer:'node_modules'
    },
    {
      question:'JavaScript array are',
      options:['dynamic','static','protected','private'],
      answer:'dynamic'
    },
    {
      question:'we need to use _______ in Visual code to build a React application',
      options:['Force.npy','node.js','create.js'],
      answer:'node.js'
    }


  ]
  const handleAnswer=(selectedAnswer)=> {
    const answer= quizData[currentQuestion]?.answer;
    if(answer === selectedAnswer)
    {
      setScore((prevScore)=>prevScore + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if(nextQuestion < quizData.length)
    {
      setCurrentQuestion(nextQuestion);
    }
    else{
      setShowScore(true);
    }
    }

  const handleRestart =() =>
  {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
  }

  return (
    <View style={styles.container}>
      { showScore ? <View>
        <Text style={styles.optionStyle}>{score}</Text>
        <TouchableOpacity style={styles.optionContainer} onPress={handleRestart}>
        <Text style={styles.resetBtnText}>Reset</Text>
        </TouchableOpacity>
    </View>:
      <View style={styles.questionContainer}>
        <Text style={styles.questionText}>{quizData[currentQuestion]?.question}</Text>
        {quizData[currentQuestion]?.options.map((item)=> {
          return <TouchableOpacity onPress={()=>handleAnswer(item)} style={styles.optionContainer}>
            <Text style={styles.optionStyle}>{item}</Text>
          </TouchableOpacity>
        })}
    </View>
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  questionContainer:{
    backgroundColor:'@DDDDDD',
    padding:10,
    margin:10,
    borderRadius:5,
  },
  optionStyle:
  {
    color:'green',
    padding:5,
    alignSelf:'center',
    fontSize:18
     
  },
  optionContainer:
  {
    borderColor:'black',
    borderWidth:2,
    marginTop:15,
  },
  questionText:
  {
    fontSize:24,
  },
  resetBtnText:
  {
    fontSize:18,
    paddingHorizontal:10,
  }
});
