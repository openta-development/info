
.. |hostname|  raw:: html

	<span id="hostname-placeholder"></span>
	<script type="text/javascript">
		var element = document.getElementById("hostname-placeholder");
		element.id = '-host-' + count++;
		element.innerHTML =  document.domain
	</script>



.. |coursename|  raw:: html

	<span id="coursename-placeholder"></span>
	<script type="text/javascript">
		var element = document.getElementById("coursename-placeholder");
		element.id = '-coursename-' + count++;
		element.innerHTML =  document.domain.split('.')[0]
	</script>

..
   provide different content based on LaTeX or HTML output format
   https://stackoverflow.com/questions/60439235/sphinx-use-a-different-directive-for-a-different-output-format

.. role:: xml(code)
   :language: xml

.. role:: latex(raw)
   :format: latex

.. role:: html(raw)
   :format: html

.. |examples_website| replace:: :latex:`\href{https://examples.opentaproject.com/lti}{https://examples.opentaproject.com/lti}`:html:`<a href="https://examples.opentaproject.com/lti" target="_blank">https://examples.opentaproject.com/lti</a>`

.. |fa-chevron-circle-down| replace:: :latex:`\faChevronCircleDown`:html:`<i class="fa fa-chevron-circle-down"></i>`
.. |fa-plus| replace:: :latex:`\faPlus`:html:`<i class="fa fa-plus"></i>`
.. |fa-camera| replace:: :latex:`\faCamera`:html:`<i class="fa fa-camera"></i>`
.. |fa-undo| replace:: :latex:`\faUndo`:html:`<i class="fa fa-undo"></i>`
.. |fa-users| replace:: :latex:`\faUsers`:html:`<i class="fa fa-users"></i>`
.. |fa-home| replace:: :latex:`\faUsers`:html:`<i class="fa fa-home"></i>`
.. |fa-arrow-circle-down| replace:: :latex:`\faUsers`:html:`<i class="fa fa-arrow-circle-down"></i>`
.. |fa-arrow-circle-up| replace:: :latex:`\faUsers`:html:`<i class="fa fa-arrow-circle-up"></i>`
