/**
 * @NApiVersion 2.x
 * @NScriptType ClientScript
 * @NModuleScope SameAccount
 */
define(['N/record','N/runtime'],
/**
 * @param {record} record
 */
function(record,runtime) {
    
    /**
     * Function to be executed after page is initialized.
     *
     * @param {Object} scriptContext
     * @param {Record} scriptContext.currentRecord - Current form record
     * @param {string} scriptContext.mode - The mode in which the record is being accessed (create, copy, or edit)
     *
     * @since 2015.2
     */
    function pageInit(scriptContext) {
    	
    	try{
    		var currentReco= scriptContext.currentRecord;
    		var userObj = runtime.getCurrentUser();
    	
    		if(scriptContext.currentRecord.type=='Assingment_1_JA_2023'){
    			
    			alert('You Are in Assingment_1_JA_2023 Page');
    		}
    		else if(scriptContext.currentRecord.type=='estemate'){
    			alert('Estimate');
    		}
    			
    		else if(scriptContext.mode == 'create')
    			{
    			currentReco.setValue({
    				fieldId: 'name',
    				value: userObj.name,
    				ignoreFieldChange: true
    				});
    			currentReco.setValue({
    				fieldId: 'custrecordrole',
    				value: userObj.role,
    				ignoreFieldChange: true
    				});
    			currentReco.setValue({
    				fieldId: 'custrecord_admin_mail_id',
    				value: userObj.email,
    				ignoreFiedChange:true});
    			}
    		
    		
    		
           }catch(e){
    		alert("Error in PageInit : "+e)
    	    }

    }

    /**
     * Function to be executed when field is changed.
     *
     * @param {Object} scriptContext
     * @param {Record} scriptContext.currentRecord - Current form record
     * @param {string} scriptContext.sublistId - Sublist name
     * @param {string} scriptContext.fieldId - Field name
     * @param {number} scriptContext.lineNum - Line number. Will be undefined if not a sublist or matrix field
     * @param {number} scriptContext.columnNum - Line number. Will be undefined if not a matrix field
     *
     * @since 2015.2
     */
    function fieldChanged(scriptContext) {
    	try{
    		var currentReco= scriptContext.currentRecord;
    		
    		if(scriptContext.fieldId =='custrecord_customer_name_ja')
    			{
    			
    			var custName=scriptContext.currentRecord.getValue({
    				fieldId:'custrecord_customer_name_ja'
    			    });
    			//alert('Customer Name :'+custName);
    			
    			if(custName){
    			 
    			var custRe=record.load({
    				type: record.Type.CUSTOMER,
    				id:custName,
    				isDynamic:true,
    			});
    			var custEmail=custRe.getValue({
    				fieldId : 'email'
    			});
    			//alert('Customer Email'+custEmail);
    			
	    	    if(custEmail){
	
				currentReco.setValue({
					fieldId:'custrecord_st_email_id_',
					value:custEmail,
					ignoreFieldChange: true
				});
				currentReco.setValue({
				fieldId: 'custrecord_fax_1',
				value :custEmail,
				ignoreFieldChange: true    });
				
	    			     }
    			  }
    		 }
    	}catch(e){
    		alert("Error in fieldChange : "+e)
    	}

    }

    /**
     * Function to be executed when field is slaved.
     *
     * @param {Object} scriptContext
     * @param {Record} scriptContext.currentRecord - Current form record
     * @param {string} scriptContext.sublistId - Sublist name
     * @param {string} scriptContext.fieldId - Field name
     *
     * @since 2015.2
     */
    function postSourcing(scriptContext) {

    }

    /**
     * Function to be executed after sublist is inserted, removed, or edited.
     *
     * @param {Object} scriptContext
     * @param {Record} scriptContext.currentRecord - Current form record
     * @param {string} scriptContext.sublistId - Sublist name
     *
     * @since 2015.2
     */
    function sublistChanged(scriptContext) {

    }

    /**
     * Function to be executed after line is selected.
     *
     * @param {Object} scriptContext
     * @param {Record} scriptContext.currentRecord - Current form record
     * @param {string} scriptContext.sublistId - Sublist name
     *
     * @since 2015.2
     */
    function lineInit(scriptContext) {

    }

    /**
     * Validation function to be executed when field is changed.
     *
     * @param {Object} scriptContext
     * @param {Record} scriptContext.currentRecord - Current form record
     * @param {string} scriptContext.sublistId - Sublist name
     * @param {string} scriptContext.fieldId - Field name
     * @param {number} scriptContext.lineNum - Line number. Will be undefined if not a sublist or matrix field
     * @param {number} scriptContext.columnNum - Line number. Will be undefined if not a matrix field
     *
     * @returns {boolean} Return true if field is valid
     *
     * @since 2015.2
     */
    function validateField(scriptContext) {
    	try{
       
    	   if(scriptContext.fieldId=='name')
    	   {
    		  var studentname=scriptContext.currentRecord.getValue('name');
	    	 
	    	  if(studentname)
	    	  {
	    	      var regEx = /^[A-Za-z ]+$/;
	    	      
	    	      if(studentname.match(regEx))
	    	      {
	    	    	  
	    	    	 return true;
	    	    	      
	    	      }else{
	    	    	     alert("Please enter letters only.");
	    	    	     scriptContext.currentRecord.setValue('name','')
	    	    	     return false;
	    	          } return true
	    	    
	    	      
	    	    } 
	    	 
	    	} 
    	          
    	   return true  }catch(e){
    	             alert("Error in validationField : "+e);
    	        }

    	
    }

    /**
     * Validation function to be executed when sublist line is committed.
     *
     * @param {Object} scriptContext
     * @param {Record} scriptContext.currentRecord - Current form record
     * @param {string} scriptContext.sublistId - Sublist name
     *
     * @returns {boolean} Return true if sublist line is valid
     *
     * @since 2015.2
     */
    function validateLine(scriptContext) {
    	
    	
    	alert('Item is Added');
    	return true

    }

    /**
     * Validation function to be executed when sublist line is inserted.
     *
     * @param {Object} scriptContext
     * @param {Record} scriptContext.currentRecord - Current form record
     * @param {string} scriptContext.sublistId - Sublist name
     *
     * @returns {boolean} Return true if sublist line is valid
     *
     * @since 2015.2
     */
    function validateInsert(scriptContext) {
    	alert('Item is Insert');
    	return true
    	
}

    /**
     * Validation function to be executed when record is deleted.
     *
     * @param {Object} scriptContext
     * @param {Record} scriptContext.currentRecord - Current form record
     * @param {string} scriptContext.sublistId - Sublist name
     *
     * @returns {boolean} Return true if sublist line is valid
     *
     * @since 2015.2
     */
    function validateDelete(scriptContext) {
    	alert('Item is Deleted');
    	return true

    }

    /**
     * Validation function to be executed when record is saved.
     *
     * @param {Object} scriptContext
     * @param {Record} scriptContext.currentRecord - Current form record
     * @returns {boolean} Return true if record is valid
     *
     * @since 2015.2
     */
    function saveRecord(scriptContext) {
    	
    	try{
	    	var custName=scriptContext.currentRecord.getValue({
				fieldId:'custrecord_customer_name_ja'
			    });
	        if (!custName) {
	        	alert('Please Enter Customer Name');
	            return false;
	            }
	        else{
	        	alert('Save succesfully ');
	        	return true;
	            }
        
      }catch(e){
    	alert('Error in SaveRecord : '+e);
        }
   }

    return {
	      pageInit: pageInit,
	      fieldChanged: fieldChanged,
//        postSourcing: postSourcing,
//        sublistChanged: sublistChanged,
//        lineInit: lineInit,
	      validateField: validateField,
	      validateLine: validateLine,
		  validateInsert: validateInsert,
		  validateDelete: validateDelete,
		  saveRecord: saveRecord
    };
    
});
