[11:47, 1/9/2023] Venkat Anna @c360: import { LightningElement, wire,api } from 'lwc';
//import getUser from '@salesforce/apex/fetchUserDetails.getUser'
import getUDetails from '@salesforce/apex/getUserDetails.getUDetails';
//import { getRecord,getFieldValue } from 'lightning/uiRecordApi';
import { getSObjectValue } from '@salesforce/apex';
//import { getFieldValue } from 'lightning/uiRecordApi';

import USER_NAME from '@salesforce/schema/User_Details__c.Name'
import PASS  from '@salesforce/schema/User_Details_c.Password_c'
import {ShowToastEvent} from 'lightning/platformShowToastEvent'
import{NavigationMixin} from 'lightning/navigation'
const fields=[USER_NAME,PASS]
export default class NewComponent extends NavigationMixin(LightningElement)  {



    uName=''
    pWord=''
    userName=''
    password=''

    

    onChangeUserName(event){
        this.userName=event.target.value
            }
            onChangePwd(event){
        this.password=event.target.value
        }


    // @api recordId;
    // @api userpassCol
//     @wire(getRecord, { recordId: '$recordId', fields })
//     Usercol({data,error}){
// if(data){
//     this.userpassCol=data
//      this.uName=getFieldValue(data,USER_NAME)
//       this.pword=getFieldValue(data,PASS)
// }
// else if(error){
//     console.log(error)
// }
//     }
  
   



        //     get checkP(){
        //         return getFieldValue(this.UserDetail__c.data,USER_ID)
        //     }

        @wire(getUDetails,{uName:'$userName'}) User_Details__c;
        

        submitHandler(){
            
            this.uName = getSObjectValue(this.User_Details__c.data,USER_NAME);
            this.pWord = getSObjectValue(this.User_Details__c.data,PASS);
            
            
           if( this.userName===this.uName && this.password===this.pWord){
            
            const showMsg= new ShowToastEvent({
                title:'Successfull',
                message:'Successfully Login',
                variant:'success',
                mode:'dismissable' 
            
            })

            this.dispatchEvent(showMsg)
            this[NavigationMixin.Navigate]({
                type:'standard__webPage',
                attributes:{
                    "url": "https://c360-7f-dev-ed.lightning.force.com/lightning/o/Movie__c/list?filterName=Recent"
                }
               
            
            })
           }
           
               
            else{
                const showMsg1= new ShowToastEvent({
                    title:'error',
                    message:'Login details are Wrong',
                    variant:'error',
                    mode:'dismissable'
                
                })
                this.dispatchEvent(showMsg1)
            }


        }
        resetHandler(){
          
        this.userName=''
registerHandler(){
            
            this[NavigationMixin.Navigate]({
                type:'standard__webPage',
                attributes:{
                    "url": "https://c360-7f-dev-ed.lightning.force.com/lightning/o/Registration_Page__c/new?count=1&nooverride=1&useRecordTypeCheck=1&navigationLocation=LIST_VIEW&uid=167311555264195057&backgroundContext=%2Flightning%2Fo%2FRegistration_Page__c%2Flist%3FfilterName%3DRecent"
                }
               
            
            })
        
        }

    }