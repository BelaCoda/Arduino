import * as React from 'react';
import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Modal, TouchableOpacity,
   ScrollView, Image, FlatList, SafeAreaView, Linking, Dimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

function Главная() {
  return(
      // <ImageBackground style={styles.forimage} source={require('./assets/2image.jpg')} resizeMode="cover" >
       <View>
        <View style={styles.forname}>
         <Text  style={styles.for1text}>Ardu</Text>
         <Text  style={styles.for2text}>Guide</Text>
        </View>
        <Text style={styles.for41text}>Это ваше легендарное начало в путешествии по Arduino.</Text>
        <Text style={styles.for4text}>Здесь вы найдете курс обучения, готовые проекты, а также список всех необходимых деталей. </Text>
        <Image style={styles.forimage} source={require('./assets/ARDUINOicon2.png')}/>
      </View>
       
        
      // </ImageBackground>
  );
}


function Обучение() {
  const [isModal_1,setModal_1] = useState(false);
  const [isModal_2,setModal_2] = useState(false);
  const [isModal_3,setModal_3] = useState(false);
  const [isModal_4,setModal_4] = useState(false);
  const [isModal_5,setModal_5] = useState(false);


  const [isModal_11,setModal_11] = useState(false);
  const [isModal_22,setModal_22] = useState(false);
  const [isModal_33,setModal_33] = useState(false);
  const [isModal_44,setModal_44] = useState(false);
  const [isModal_55,setModal_55] = useState(false);


  const [isModal_111,setModal_111] = useState(false);



  const [isModal_p1,setModal_p1] = useState(false);
  const [isModal_p2,setModal_p2] = useState(false);
  const [isModal_p3,setModal_p3] = useState(false);
  const [isModal_p4,setModal_p4] = useState(false);
  const [isModal_p5,setModal_p5] = useState(false);





 
  
  
  return (

  <ScrollView>

    
    {/* Плата Arduino */}
    {/* Плата Arduino */}
    {/* Плата Arduino */}
    
    <Modal visible={isModal_2}>
        <Text onPress={() => setModal_2(false)} style={styles.for5text}>❮ назад</Text>
        <SafeAreaView style={{flex: 1,marginTop:'10%',}} >
        <ScrollView >
            <TouchableOpacity onPressIn={() => setModal_4(true)} onPressOut={() => setModal_2(false)} style={styles.container_ard_1}>
                <Text style={styles.for6text} >Аrduino для начинающих</Text>
            </TouchableOpacity>

            <TouchableOpacity onPressIn={() => setModal_3(true)} onPressOut={() => setModal_2(false)} style={styles.container_ard_2}>
              <Text style={styles.for6text} >Что такое Arduino?</Text> 
            </TouchableOpacity>

            <TouchableOpacity onPressIn={() => setModal_1(true)} onPressOut={() => setModal_2(false)} style={styles.container_ard_3}>
              <Text style={styles.for6text} >Для чего нужно Arduino?</Text>  
            </TouchableOpacity>

            <TouchableOpacity onPressIn={() => setModal_5(true)} onPressOut={() => setModal_2(false)} style={styles.container_ard_4}>
              <Text style={styles.for6text} >Стартовый набор</Text>
            </TouchableOpacity>
        </ScrollView>
        </SafeAreaView>
    </Modal> 
     



     

    <Modal visible={isModal_4}>
      <TouchableOpacity onPressOut={() => setModal_4(false)} onPressIn={() => setModal_2(true)} >
        <Text style={styles.for5text}>❮ назад</Text>
        </TouchableOpacity>
        <Text style={styles.for11text}>1.1 Аrduino для начинающих</Text>
        <ScrollView >
        <Text style={styles.for4text} >
          В этом приложении мы решили собрать полное пошаговое руководство для начинающих Arduino. Мы разберем что такое Arduino, что нужно для начала изучения, где скачать и как установить и настроить среду программирования, как устроен и как пользоваться языком программирования и многое другое, что необходимо для создания полноценных сложных устройств на базе семейства этих микроконтроллеров.
        </Text>
        </ScrollView>
        
   </Modal> 



   <Modal visible={isModal_3}>
      <TouchableOpacity onPressOut={() => setModal_3(false)} onPressIn={() => setModal_2(true)} >
        <Text style={styles.for5text}>❮ назад</Text>
        </TouchableOpacity>
        <Text style={styles.for11text}>1.2 Что такое Arduino?</Text>
        <ScrollView style={{marginBottom:'10%',marginTop:'3%'}}>
        <Text style={styles.for4text} >
          Arduino — это электронный конструктор, который позволяет любому человеку создавать разнообразные электро-механические устройства. Arduino состоит из программной и аппаратной части. Программная часть включает в себя среду разработки (программа для написания и отладки прошивок), множество готовых и удобных библиотек, упрощенный язык программирования. Аппаратная часть включает в себя большую линейку микроконтроллеров и готовых модулей для них. Благодаря этому, работать с Arduino очень просто!
        </Text>
        </ScrollView>
        
   </Modal> 



   <Modal visible={isModal_1}>
      <TouchableOpacity onPressOut={() => setModal_1(false)} onPressIn={() => setModal_2(true)} >
        <Text style={styles.for5text}>❮ назад</Text>
        </TouchableOpacity>
        <Text style={styles.for11text}>1.3 Для чего нужно Arduino?</Text>
        <ScrollView  style={{marginBottom:'10%',marginTop:'3%'}}>
        <Text style={styles.for4text} >
          С помощью ардуино можно обучаться программированию, электротехнике и механике. Но это не просто обучающий конструктор. На его основе вы сможете сделать действительно полезные устройства.
          Начиная с простых мигалок, метеостанций, систем автоматизации и заканчивая системой умного дома, ЧПУ станками и беспилотными летательными аппаратами. Возможности не ограничиваются даже вашей фантазией, потому что есть огромное количество инструкций и идей для реализации.
        </Text>
        </ScrollView>
   </Modal> 



   <Modal visible={isModal_5}>
   <TouchableOpacity onPressOut={() => setModal_5(false)} onPressIn={() => setModal_2(true)} >
        <Text style={styles.for5text}>❮ назад</Text>
        </TouchableOpacity>
        <Text style={styles.for11text}>
          1.4 Стартовый набор Arduino
        </Text>
        <ScrollView  style={{marginBottom:'10%',marginTop:'3%'}}>
        <Text style={styles.for4text} >
         Для того что бы начать изучать Arduino необходимо обзавестись самой платой микроконтроллера и дополнительными деталями. Лучше всего приобрести стартовый набор Arduino, но можно и самостоятельно подобрать все необходимое. Мы советую выбрать набор, потому что это проще и зачастую дешевле. 
        </Text>
        </ScrollView>
    </Modal>
    


{/* Плата Arduino */}
{/* Плата Arduino */}
{/* Плата Arduino */}





{/* Программирование */}
{/* Программирование */}
{/* Программирование */}





<Modal visible={isModal_11}>
        <Text onPress={() => setModal_11(false)} style={styles.for5text}>❮ назад</Text>
        <SafeAreaView style={{flex: 1,marginTop:'10%',}} >
        <ScrollView >
            <TouchableOpacity onPressIn={() => setModal_22(true)} onPressOut={() => setModal_11(false)} style={[styles.container_ard_1,{backgroundColor:'#14e02f',shadowColor:'#14e02f',}]}>
                <Text style={styles.for6text} >Среда Arduino IDE</Text>
            </TouchableOpacity>

            <TouchableOpacity onPressIn={() => setModal_33(true)} onPressOut={() => setModal_11(false)} style={[styles.container_ard_2,{backgroundColor:'#0fa623',shadowColor:'#0fa623',}]}>
              <Text style={styles.for6text} > Язык Ардуино</Text> 
            </TouchableOpacity>

            <TouchableOpacity onPressIn={() => setModal_44(true)} onPressOut={() => setModal_11(false)} style={[styles.container_ard_3,{backgroundColor:'#018212',shadowColor:'#018212',}]}>
              <Text style={styles.for6text} > Функция setup</Text>  
            </TouchableOpacity>

            <TouchableOpacity onPressIn={() => setModal_55(true)} onPressOut={() => setModal_11(false)} style={[styles.container_ard_4,{backgroundColor:'#14521c',shadowColor:'#14521c',}]}>
              <Text style={styles.for6text} >Функция loop</Text>
            </TouchableOpacity>
        </ScrollView>
        </SafeAreaView>
    </Modal> 
     



     

    <Modal visible={isModal_22}>
      <TouchableOpacity onPressOut={() => setModal_22(false)} onPressIn={() => setModal_11(true)} >
        <Text style={styles.for5text}>❮ назад</Text>
        </TouchableOpacity>
        <Text style={styles.for11text}>2.1 Среда разр. Arduino IDE</Text>
        <ScrollView >
        <Text style={styles.for4text} >
           Для написания, отладки и загрузки прошивок необходимо скачать и установить Arduino IDE. Это очень простая и удобная программа. На моем сайте я уже описывал процесс загрузки, установки и настройки среды разработки. Поэтому здесь я просто оставлю ссылки на последнюю версию программы и на статью с подробной инструкцией и на полная инструкция(https://all-arduino.ru/arduino-ide/)
        </Text>
        </ScrollView>
        
   </Modal> 



   <Modal visible={isModal_33}>
      <TouchableOpacity onPressOut={() => setModal_33(false)} onPressIn={() => setModal_11(true)} >
        <Text style={styles.for5text}>❮ назад</Text>
        </TouchableOpacity>
        <Text style={styles.for11text}>2.2 Язык программирования Ардуино</Text>
        <ScrollView style={{marginBottom:'10%',marginTop:'3%'}}>
        <Text style={styles.for4text} >
          Когда у вас есть на руках плата микроконтроллера и на компьютере установлена среда разработки, вы можете приступать к написанию своих первых скетчей (прошивок). Для этого необходимо ознакомиться с языком программирования.
          Для программирования Arduino используется упрощенная версия языка C++ с предопределенными функциями. Как и в других Cи-подобных языках программирования есть ряд правил написания кода. Вот самые базовые из них:
          1. После каждой инструкции необходимо ставить знак точки с запятой (;)
          2. Перед объявлением функции необходимо указать тип данных, возвращаемый функцией или void если функция не возвращает значение.
          3. Так же необходимо указывать тип данных перед объявлением переменной.
          4. Комментарии обозначаются: // Строчный и /* блочный */
          Подробнее о типах данных, функциях, переменных, операторах и языковых конструкциях вы можете узнать на странице по программированию Arduino(https://all-arduino.ru/programmirovanie-arduino/). Вам не нужно заучивать и запоминать всю эту информацию. Вы всегда можете зайти в справочник и посмотреть синтаксис той или иной функции. 
          Все прошивки для Arduino должны содержать минимум 2 функции. Это setup() и loop().
        </Text>
        </ScrollView>
        
   </Modal> 



   <Modal visible={isModal_44}>
      <TouchableOpacity onPressOut={() => setModal_44(false)} onPressIn={() => setModal_11(true)} >
        <Text style={styles.for5text}>❮ назад</Text>
        </TouchableOpacity>
        <Text style={styles.for11text}>2.3 Функция setup</Text>
        <Image style={styles.forimage2} source={require('./assets/code1.png')}/>
        <ScrollView  style={{marginBottom:'10%',marginTop:'3%'}}>
        
        <Text style={styles.for4text} >
            Функция <Text style={[styles.for4text,{color:'blue',textDecorationLine: 'underline',}]} onPress={() => Linking.openURL('https://all-arduino.ru/programmirovanie-arduino/setup/')}>setup()</Text> выполняется в самом начале и только 1 раз сразу после включения или перезагрузки вашего устройства. Обычно в этой функции декларируют режимы пинов, открывают необходимые протоколы связи, устанавливают соединения с дополнительными модулями и настраивают подключенные библиотеки. Если для вашей прошивки ничего подобного делать не нужно, то функция все равно должна быть объявлена. Сверху стандартный пример функции setup:
            В этом примере просто открывается последовательный порт для связи с компьютером и пины 9 и 13 назначаются входом и выходом. Ничего сложного. Но если вам что-либо не понятно, вы всегда можете задать вопрос в комментариях ниже.
         </Text>
         
        </ScrollView>
   </Modal> 



   <Modal visible={isModal_55}>
   <TouchableOpacity onPressOut={() => setModal_55(false)} onPressIn={() => setModal_11(true)} >
        <Text style={styles.for5text}>❮ назад</Text>
        </TouchableOpacity>
        <Text style={styles.for11text}>
        2.4 Функция loop
        </Text>
        <ScrollView  style={{marginBottom:'10%',marginTop:'3%'}}>
        <Text style={styles.for4text} >
         Функция <Text style={[styles.for4text,{color:'blue',textDecorationLine: 'underline',}]} onPress={() => Linking.openURL('https://all-arduino.ru/programmirovanie-arduino/loop/')}>loop()</Text> выполняется после функции setup(). Loop в переводе с английского значит «петля». Это говорит о том что функция зациклена, то есть будет выполняться снова и снова. Например микроконтроллер ATmega328, который установлен в большинстве плат Arduino, будет выполнять функцию loop около 10 000 раз в секунду (если не используются задержки и сложные вычисления). Благодаря этому у нас есть большие возможности.
        </Text>
        </ScrollView>
    </Modal>




{/* Программирование */}
{/* Программирование */}
{/* Программирование */}





{/* паяние */}
{/* паяние */}
{/* паяние */}




<Modal visible={isModal_111}>
    
    <Text onPress={() => setModal_111(false)} style={styles.for5text}>❮ назад</Text>
    <ScrollView>


    <TouchableOpacity onPressIn={() => setModal_p1(true)} onPressOut={() => setModal_111(false)} style={styles.container111}>
      <Text style={styles.for6text} >1. Правила безопасности</Text>
      <StatusBar style="auto" />
    </TouchableOpacity>


    <TouchableOpacity onPressIn={() => setModal_p2(true)} onPressOut={() => setModal_111(false)}  style={styles.container222}>
       <Text style={styles.for6text} >2. Набор для паяния</Text>
    </TouchableOpacity>


    <TouchableOpacity onPressIn={() => setModal_p3(true)} onPressOut={() => setModal_111(false)} style={styles.container333}>
      <Text style={styles.for6text} >3. Использ. пaяльника</Text>
    </TouchableOpacity>


    
    
    </ScrollView>

</Modal>






<Modal visible={isModal_p1} >
<TouchableOpacity onPressOut={() => setModal_p1(false)} onPressIn={() => setModal_111(true)} >
        <Text style={styles.for5text}>❮ назад</Text>
        </TouchableOpacity>
        <Text style={styles.for11text}>
        1. Правила безопасности
        </Text>
        <ScrollView  style={{marginBottom:'10%',marginTop:'3%'}}>
        <Text style={styles.for4text} >
        Техника безопасности при пайке:
        </Text>
      <Text style={styles.for4text}>1. Проверить целостность шнура, штепсельной вилки и розетки.</Text>
        <Text style={styles.for4text}>2. Проверить целостность самого паяльника, на наличие повреждений изоляции.</Text>
        <Text style={styles.for4text}>3. Если при включении паяльника слышен треск - немедленно выключайте его.</Text>
        <Text style={styles.for4text}>4. Не работать в помещениях с повышенной влажностью. </Text>
        <Text style={styles.for4text}>5. Не работать влажными руками. </Text>
        <Text style={styles.for4text}>6. При выключении не тянуть за провод. </Text>
        <Text style={styles.for4text}>7. Держать паяльник только за ручку, избегая прикосновений к металлическим частям (очень высокая температура)</Text>
        <Text style={styles.for4text}>8. Работать только в проветриваемом помещении.</Text>
        <Text style={styles.for4text}>9. При пайке не наклоняться над паяльником ближе чем на 20 см . во избежание попадания брызг олова и горячих паров в глаза.</Text>
        <Text style={styles.for4text}>10. Не работать вблизи горючих и легковоспламеняющихся предметов и на столах из горючих материалов без негорючей подставки.</Text>
        <Text style={styles.for4text}>11. В перерывах между работой ставить паяльник только на подставку.</Text>
        <Text style={styles.for4text}>12. Не в коем случае не ронять даже выключенный паяльник.</Text>
        <Text style={styles.for4text}>13. После окончания работы не прикасаться к жалу и корпусу паяльника до его полного остывания (15-30 минут).</Text>
        
        </ScrollView>
</Modal>



<Modal visible={isModal_p2} >
<TouchableOpacity onPressOut={() => setModal_p2(false)} onPressIn={() => setModal_111(true)} >
        <Text style={styles.for5text}>❮ назад</Text>
        </TouchableOpacity>
        <Text style={styles.for11text}>
        2. Набор для паяния
        </Text>
        <ScrollView  style={{marginBottom:'10%',marginTop:'3%'}}>
        <Text style={styles.for4text} >
        Набор может состоять из:
        </Text>
      <Text style={styles.for4text}>1. Припоя, в состав которого входит олово и свинец (предназначен для создания электрического контакта между металлическими деталями посредством расплавления).</Text>
        <Text style={styles.for4text}>2. Канифоль (предназначена для пайки различных твердых материалов).</Text>
        <Text style={styles.for4text}>3. Канифольный флюс, состоящий из ПАВ, канифоли, органических и синтетических смол.</Text>
        <Text style={styles.for4text}>4. Паяльную кислоту, в состав которой входит хлористый цинк, смачивающие добавки, а также вода предназначен для пайки металлов, загрязненных контактов. </Text>
        <Text style={styles.for4text}>5. Паяльника (входит в набор не всегда) – главного рабочего электрического инструмента для пайщика, состоящего их нагревательного элемента, стержня, электрического шнура, штепсельной вилки, изоляционной ручки. </Text>
        </ScrollView>
</Modal>




<Modal visible={isModal_p3} >
<TouchableOpacity onPressOut={() => setModal_p3(false)} onPressIn={() => setModal_111(true)} >
        <Text style={styles.for5text}>❮ назад</Text>
        </TouchableOpacity>
        <Text style={styles.for11text}>
        3. Использование паяльника
        </Text>
        <ScrollView  style={{marginBottom:'10%',marginTop:'3%'}}>
        <Text style={styles.for4text} >
        Основы пайки, или как научится паять
        </Text>
      <Text style={styles.for4text}>При производстве работ нужно помнить о правилах по технике безопасности, соблюдая которые можно предотвратить пожары, различные повреждения, такие как ожоги, а также защититься от негативного воздействия электрического тока.


 </Text>
        <Text style={styles.for4text}>Прежде всего нужно проверить провод на целостность, недопустимы никакие механические повреждения – порезов, оголения и пр. кроме того, нужно исключить спутанность, загибы, чтобы при дальнейшей работе раскаленное жало не прикасалось к нему. Паяльник можно брать только за держатель, ни в коем случае нельзя притрагиваться к его корпусу.</Text>
        <Text style={styles.for4text}>Обратите внимание на освещение рабочего места, если освещения недостаточно, то можно установить дополнительный источник света на месте работы – это создаст благоприятные и комфортные условия. Вентиляция также должна хорошо работать, ведь при пайке очень важно обеспечить кондиционирование воздуха в помещении от возникающих паров.</Text>
        <Text style={styles.for4text}>Прежде чем начать непосредственно работу, нужно избавиться от заводской смазки, находящейся на корпусе, поскольку она при нагревании может дымить. Поэтому зачастую паяльник подсоединяют к удлинителю и выводят ненадолго на улицу. Затем нужно при помощи наждачной шкурки или напильника с мелкой насечкой очистить выбранное жало от пленочки. Для этого можно использовать канифоль, просто погрузил жало туда. Затем на поверхность наносят слой олова, и приступают к соединению деталей.</Text>
        </ScrollView>
</Modal>








{/* паяние */}
{/* паяние */}
{/* паяние */}





















    <TouchableOpacity onPress={() => setModal_2(true)} style={styles.container1}>
      <Text style={styles.for6text} >1. Плата Arduino</Text>
      <StatusBar style="auto" />
    </TouchableOpacity>


    <TouchableOpacity onPress={() => setModal_11(true)}  style={styles.container2}>
      <Text style={styles.for6text} >2.Программирование</Text>
    </TouchableOpacity>


    <TouchableOpacity onPress={() => setModal_111(true)} style={styles.container4}>
      <Text style={styles.for6text} >3. Паяние</Text>
    </TouchableOpacity>
  




















  </ScrollView>
  );
}


function Объекты() {

  const [isModal_112,setModal_112] = useState(false);
  const [isModal_222,setModal_222] = useState(false);
  const [isModal_333,setModal_333] = useState(false);
  const [isModal_444,setModal_444] = useState(false);
  const [isModal_555,setModal_555] = useState(false);
  const [isModal_666,setModal_666] = useState(false);
 
  return (


<View>



    <View style={{
      marginTop:'3%',
    marginLeft:'1.2%',
    height:'50%',
    width:'80%',
    justifyContent:'space-between',
    flexDirection:'row',
     }}>
      
       <TouchableOpacity style={{borderRadius:70}} onPress={() => setModal_112(true)}>
        <Image style={[styles.forimage,{width:'200%',height:'55%',margin:'9%',flexDirection:'row',borderRadius:25}]} source={require('./assets/o1.jpg')}
        />
        <StatusBar style="auto" />
      </TouchableOpacity> 





      
    <TouchableOpacity  onPress={() => setModal_222(true)}>
        <Image style={[styles.forimage,{width:'200%',height:'55%',margin:'9%',flexDirection:'row',borderRadius:25}]} source={require('./assets/o2.jpg')}/>
        <StatusBar style="auto" />
      </TouchableOpacity> 


      <TouchableOpacity  onPress={() => setModal_333(true)}>
        <Image style={[styles.forimage,{width:'200%',height:'55%',margin:'9%',flexDirection:'row',borderRadius:25}]} source={require('./assets/o3.jpg')}/>
        <StatusBar style="auto" />
      </TouchableOpacity> 






      </View>





      <View style={{
        marginTop:'-24%',
        marginLeft:'1.2%',
        height:'50%',
        width:'80%',
        justifyContent:'space-between',
        flexDirection:'row', 
      }}>
      
          <TouchableOpacity onPress={() => setModal_444(true)}>
            <Image style={[styles.forimage,{width:'200%',height:'55%',margin:'9%',flexDirection:'row',borderRadius:25}]} source={require('./assets/o4.jpg')}
            />
            <StatusBar style="auto" />
          </TouchableOpacity> 


          <TouchableOpacity  onPress={() => setModal_555(true)}>
              <Image style={[styles.forimage,{width:'200%',height:'55%',margin:'9%',flexDirection:'row',borderRadius:25}]} source={require('./assets/o5.jpg')}/>
              <StatusBar style="auto" />
            </TouchableOpacity> 


          <TouchableOpacity   onPress={() => setModal_666(true)}>
            <Image style={[styles.forimage,{width:'200%',height:'55%',margin:'9%',flexDirection:'row',borderRadius:25}]} source={require('./assets/o6.jpg')}/>
            <StatusBar style="auto" />
          </TouchableOpacity> 


   </View> 


{/* объекты */}
{/* объекты */}
{/* объекты */}


<Modal  visible={isModal_112}>
      <TouchableOpacity onPressOut={() => setModal_112(false)} >
        <Text style={styles.for5text}>❮ назад</Text>
      </TouchableOpacity>
        <Text style={styles.for1imgtext }>
        1. Цветомузыка
        </Text>
        <ScrollView  style={{marginBottom:'10%',marginTop:'3%'}}>
        
        </ScrollView>
</Modal>



<Modal  visible={isModal_222}>
      <TouchableOpacity onPressOut={() => setModal_222(false)} >
        <Text style={styles.for5text}>❮ назад</Text>
      </TouchableOpacity>
        <Text style={styles.for1imgtext }>
        2. "Slow dance"
        </Text>
        <ScrollView  style={{marginBottom:'10%',marginTop:'3%'}}>
        
        </ScrollView>
</Modal>


<Modal  visible={isModal_333}>
      <TouchableOpacity onPressOut={() => setModal_333(false)} >
        <Text style={styles.for5text}>❮ назад</Text>
      </TouchableOpacity>
        <Text style={styles.for1imgtext }>
        3. Термопод
        </Text>
        <ScrollView  style={{marginBottom:'10%',marginTop:'3%'}}>
        
        </ScrollView>
</Modal>



<Modal  visible={isModal_444}>
      <TouchableOpacity onPressOut={() => setModal_444(false)} >
        <Text style={styles.for5text}>❮ назад</Text>
      </TouchableOpacity>
        <Text style={styles.for1imgtext }>
        4. Торшер
        </Text>
        <ScrollView  style={{marginBottom:'10%',marginTop:'3%'}}>
        
        </ScrollView>
</Modal>



<Modal  visible={isModal_555}>
      <TouchableOpacity onPressOut={() => setModal_555(false)} >
        <Text style={styles.for5text}>❮ назад</Text>
      </TouchableOpacity>
        <Text style={styles.for1imgtext }>
        5. Гирлянда
        </Text>
        <ScrollView  style={{marginBottom:'10%',marginTop:'3%'}}>
        
        </ScrollView>
</Modal>



<Modal  visible={isModal_666}>
      <TouchableOpacity onPressOut={() => setModal_666(false)} >
        <Text style={styles.for5text}>❮ назад</Text>
      </TouchableOpacity>
        <Text style={styles.for1imgtext }>
        6.Ленивый чай.
        </Text>
        <ScrollView  style={{marginBottom:'10%',marginTop:'3%'}}>
        
        </ScrollView>
</Modal>


{/* объекты */}
{/* объекты */}
{/* объекты */}
  </View> 
  
      
    
    

  );
}




function Детали() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text  style={{fontSize:'20%',fontWeight:'bold',}}>В разработке...</Text>
    </View>
  );
}



const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Главная') {
              iconName = focused
                ? 'home'
                : 'home-outline';
            } else if (route.name === 'Объекты') {
              iconName = focused ? 'construct' : 'construct-outline';
            } else if (route.name === 'Обучение'){
              iconName = focused ? 'library' : 'library-outline';
            }else if (route.name === 'Детали'){
              iconName = focused ? 'hardware-chip' : 'hardware-chip-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'green',
          tabBarInactiveTintColor: 'gray',
          
          // tabBarSize:'3%',
         
          
        })}
      >
        <Tab.Screen style={styles.text} name="Главная" component={Главная} />
        <Tab.Screen name="Обучение" component={Обучение} />
        <Tab.Screen name="Объекты" component={Объекты} />
        <Tab.Screen name="Детали" component={Детали} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container1: {
    // flex: 1,
    marginTop:'10%',
    // marginBottom:'10%',
    marginLeft:'10%',
    marginRight:'10%',
    borderRadius:40,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
    width:'80%',
    height:'90%',
    // borderWidth:4,
    // borderColor:'blue'
    shadowOpacity: 13,
    shadowColor:'blue',
    shadowRadius: 7,
    elevation: 10
  },
  container2: {
    // flex: 1,
    marginTop:'5%',
    // marginBottom:'10%',
    marginLeft:'10%',
    marginRight:'10%',
    borderRadius:40,
    backgroundColor: '#1E90FF',
    alignItems: 'center',
    justifyContent: 'center',
    width:'78%',
    height:'90%',
    // borderWidth:4
    shadowOpacity: 13,
    shadowColor:'#1E90FF',
    shadowRadius: 7,
    elevation: 10
  },
  container_ard_1: {
    // flex: 1,
    marginTop:'5%',
    // marginBottom:'10%',
    marginLeft:'10%',
    marginRight:'10%',
    borderRadius:40,
    backgroundColor: '#1E90FF',
    alignItems: 'center',
    justifyContent: 'center',
    width:'78%',
    height:'60%',
    // borderWidth:4
    shadowOpacity: 13,
    shadowColor:'#1E90FF',
    shadowRadius: 7,
    elevation: 10
  },
  container3: {
    // flex: 1,
    marginTop:'10%',
    // marginBottom:'10%',
    marginLeft:'10%',
    marginRight:'10%',
    borderRadius:40,
    backgroundColor: '#1E90FF',
    alignItems: 'center',
    justifyContent: 'center',
    width:'78%',
    height:'40%',
    
  },
  container4: {
    // flex: 1,
    marginTop:'5%',
    // marginBottom:'10%',
    marginLeft:'10%',
    marginRight:'10%',
    borderRadius:40,
    backgroundColor: '#87CEEB',
    alignItems: 'center',
    justifyContent: 'center',
    width:'78%',
    height:'90%',
    // borderWidth:4
    shadowOpacity: 13,
    shadowColor:'#87CEEB',
    shadowRadius: 7,
    elevation: 10
    
  },
  container_ard_2: {
    // flex: 1,
    marginTop:'5%',
    // marginBottom:'10%',
    marginLeft:'10%',
    marginRight:'10%',
    borderRadius:40,
    backgroundColor: '#5357db',
    alignItems: 'center',
    justifyContent: 'center',
    width:'78%',
    height:'60%',
    // borderWidth:4
    shadowOpacity: 13,
    shadowColor:'#5357db',
    shadowRadius: 7,
    elevation: 10
  },
  container_ard_3: {
    // flex: 1,
    marginTop:'5%',
    // marginBottom:'10%',
    marginLeft:'10%',
    marginRight:'10%',
    borderRadius:40,
    backgroundColor: '#3638a3',
    alignItems: 'center',
    justifyContent: 'center',
    width:'78%',
    height:'60%',
    // borderWidth:4
    shadowOpacity: 13,
    shadowColor:'#3638a3',
    shadowRadius: 7,
    elevation: 10
    
  },
  container_ard_4: {
    // flex: 1,
    marginTop:'5%',
    // marginBottom:'10%',
    marginLeft:'10%',
    marginRight:'10%',
    borderRadius:40,
    backgroundColor: '#2e306e',
    alignItems: 'center',
    justifyContent: 'center',
    width:'78%',
    height:'60%',
    // borderWidth:4
    shadowOpacity: 13,
    shadowColor:'#2e306e',
    shadowRadius: 7,
    elevation: 10
    
  },
  forname:{
    flexDirection:'row',
    marginLeft:'25%'
  },
  for1text:{
    padding:0,
    marginLeft:'11%',
    marginTop:'15%',
    fontWeight:'bold',
    fontSize:'20%',
    color:'green',
    
  },
  for11text:{
    padding:0,
    marginLeft:'11%',
    marginRight:'10%',
    marginTop:'5%',
    fontWeight:'bold',
    fontSize:'30%',
    color:'green',
    
    
    
  },
  for5text:{
    padding:0,
    marginLeft:'11%',
    marginTop:'15%',
    fontWeight:'bold',
    fontSize:'20%',
    color:'red'
  },
  for2text:{
    paddingTop:'15%',
    marginLeft:'2%',
    // marginTop:'15%',
    fontWeight:'bold',
    fontSize:'20%',
    color:'orange'
  },
  for3text:{
    padding:0,
    marginLeft:'11%',
    marginTop:'7%',
    fontWeight:'bold',
    fontSize:'20%',
    color:'blue'
  },
  for4text:{
    padding:0,
    marginRight:'11%',
    marginLeft:'11%',
    marginTop:'7%',
    fontSize:'20%',
    color:'black'
  },
  for41text:{
    padding:0,
    marginRight:'11%',
    marginLeft:'11%',
    marginTop:'7%',
    fontSize:'20%',
    color:'blue'
  },
  forimage:{
    marginTop:'5%',
    width:'100%',
    height:'50%'
    
  },
  forimage2:{
    marginTop:'5%',
    width:'100%',
    height:'35%'
    
  },
  text:{
    
  },
  for6text:{
   fontSize:20,
   fontWeight:'bold',
   padding:-100,
   color:'white'
  },

  for1imgtext:{
    padding:0,
    marginLeft:'11%',
    marginRight:'10%',
    marginTop:'5%',
    fontWeight:'bold',
    fontSize:'30%',
    color:'black',
  },
  container111: {
    // flex: 1,
    marginTop:'15%',
    // marginBottom:'10%',
    marginLeft:'10%',
    marginRight:'10%',
    borderRadius:40,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    width:'78%',
    height:'60%',
    // borderWidth:4,
    // borderColor:'blue'
    shadowOpacity: 13,
    shadowColor:'red',
    shadowRadius: 7,
    elevation: 10
  },
  container222: {
    // flex: 1,
    marginTop:'5%',
    // marginBottom:'10%',
    marginLeft:'10%',
    marginRight:'10%',
    borderRadius:40,
    backgroundColor: '#d60b11',
    alignItems: 'center',
    justifyContent: 'center',
    width:'78%',
    height:'60%',
    // borderWidth:4,
    // borderColor:'blue'
    shadowOpacity: 13,
    shadowColor:'#d60b11',
    shadowRadius: 7,
    elevation: 10
  },
  container333: {
    // flex: 1,
    marginTop:'5%',
    // marginBottom:'10%',
    marginLeft:'10%',
    marginRight:'10%',
    borderRadius:40,
    backgroundColor: '#ad0a0f',
    alignItems: 'center',
    justifyContent: 'center',
    width:'78%',
    height:'60%',
    // borderWidth:4,
    // borderColor:'blue'
    shadowOpacity: 13,
    shadowColor:'#ad0a0f',
    shadowRadius: 7,
    elevation: 10
  },
  container444: {
    // flex: 1,
    marginTop:'5%',
    // marginBottom:'10%',
    marginLeft:'10%',
    marginRight:'10%',
    borderRadius:40,
    backgroundColor: '#78080c',
    alignItems: 'center',
    justifyContent: 'center',
    width:'78%',
    height:'60%',
    // borderWidth:4,
    // borderColor:'blue'
    shadowOpacity: 13,
    shadowColor:'#78080c',
    shadowRadius: 7,
    elevation: 10
  },
  

  
  
});
