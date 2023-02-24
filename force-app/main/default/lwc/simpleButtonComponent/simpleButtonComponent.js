import SystemModstamp from '@salesforce/schema/Account.SystemModstamp';
import { LightningElement } from 'lwc';

export default class SimpleButtonComponent extends LightningElement {
    baseHandler(event){
        console.log('simple button ==> baba count start......>');
    }
    neutralHandler(event){
        console.log('neutral button ==> naanna pandule gumpuluga vastay, simham single ga vastundi..');
    }
    brandlHandler(event){
        console.log('brand button ==> zuzubi...');
    }
    brandoutlinelHandler(event){
        console.log('brand outline button==> laka laka laka laka laka ......');
    }
    destructiveHandler(event){
        console.log('destructive button ==> atiga aavesapade aaadadi, software job chese magadu bagupadinattu charitralo ledu.');
    }
    destructiveText(event){
        console.log('destructive - text button ==> aaapara neetileni kukka .. inkokka maata matladite nee naluka kosta');
    }
    successHandler(event){
        console.log('success button ==> chitti   . ');
    }
    inverseHandler(event){
        console.log('inverse button ==> vasi..eeee...myahhahah');
    }
}

