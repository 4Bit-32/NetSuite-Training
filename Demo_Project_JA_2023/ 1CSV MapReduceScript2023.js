/**
 * @NApiVersion 2.x
 * @NScriptType MapReduceScript
 * @NModuleScope SameAccount
 */
define(['N/file', 'N/record', 'N/runtime', 'N/search'],
		/**
		 * @param {file} file
		 * @param {record} record
		 * @param {runtime} runtime
		 * @param {search} search
		 */
		function(file, record, runtime, search) {

	/**
	 * Marks the beginning of the Map/Reduce process and generates input data.
	 *
	 * @typedef {Object} ObjectRef
	 * @property {number} id - Internal ID of the record instance
	 * @property {string} type - Record type id
	 *
	 * @return {Array|Object|Search|RecordRef} inputSummary
	 * @since 2015.1
	 */
	function getInputData() {
		try{
			var invoiceSearchObj = search.create({
				type: "invoice",
				filters:
					[
					 ["type","anyof","CustInvc"], 
					 "AND", 
					 ["status","anyof","CustInvc:D"], 
					 "AND", 
					 ["name","anyof","25808"], 
					 "AND", 
					 ["mainline","is","F"], 
					 "AND", 
					 ["taxline","is","F"], 
					 "AND", 
					 ["cogs","is","F"]
					 ],
					 columns:
						 [
						  search.createColumn({name: "entity", label: "Name"}),
						  search.createColumn({name: "email", label: "Email"}),
						  search.createColumn({name: "statusref", label: "Status"}),
						  search.createColumn({name: "tranid", label: "Document Number"}),
						  search.createColumn({name: "amount", label: "Amount"}),
						  search.createColumn({name: "item", label: "Item"})
						  ]
			});
			var csvData = " ";
			csvData = "Customer Name,Customer Transaction ID,Customer Email,invoice Amount,Item,Status\n";

			var csvFile = file.create({
				name : 'invoice Data_JA.csv',
				contents : csvData,
				folder : 13700,
				fileType : 'CSV'
			});

			var searchResultCount = invoiceSearchObj.runPaged().count;
			log.debug("invoiceSearchObj result count",searchResultCount);
			invoiceSearchObj.run().each(function(result){
				invCustName= result.getValue('entity');
				log.debug('invoiceCustName',invCustName);
				invDocNumber=result.getValue('tranid');
				log.debug('invDocNumber',invDocNumber);
				invCustEmail=result.getValue('email');
				log.debug('invCustEmail',invCustEmail);
				invAmount= result.getValue('amount');
				log.debug('invAmount',invAmount);
				invItem= result.getText('item');
				log.debug('invItem',invItem);
				invStatus=result.getValue('statusref');
				log.debug('invStatus',invStatus);

				var row = invCustName + ',' + invDocNumber + ',' + invCustEmail + ',' + invAmount+','+invItem+','+invStatus;//+'\n';

				csvFile.appendLine({ value: row });
				log.debug('Row',row);
				return true;
			});

			var csvFileId = csvFile.save();
			log.debug("CSV Created ");
		}
		catch(e){
			log.error('Erro in GetInputDatA',e);
		}
		/*
    		invoiceSearchObj.id="customsearch1678920731803";
    		invoiceSearchObj.title="Invoice Search Record For  CSV JA (copy)";
    		var newSearchId = invoiceSearchObj.save();
		 */
	}

	/**
	 * Executes when the map entry point is triggered and applies to each key/value pair.
	 *
	 * @param {MapSummary} context - Data collection containing the key/value pairs to process through the map stage
	 * @since 2015.1
	 */
	function map(context) {

	}

	/**
	 * Executes when the reduce entry point is triggered and applies to each group.
	 *
	 * @param {ReduceSummary} context - Data collection containing the groups to process through the reduce stage
	 * @since 2015.1
	 */
	function reduce(context) {

	}


	/**
	 * Executes when the summarize entry point is triggered and applies to the result set.
	 *
	 * @param {Summary} summary - Holds statistics regarding the execution of a map/reduce script
	 * @since 2015.1
	 */
	function summarize(summary) {

	}

	return {
		getInputData: getInputData,
		map: map,
		reduce: reduce,
		summarize: summarize
	};

});