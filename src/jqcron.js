(function($) {
	$.jqcron = function(el, options) {
		// To avoid scope issues, use 'base' instead of 'this'
		// to reference this class from internal events and functions.
		var base = this;

		// Access to jQuery and DOM versions of element
		base.$el = $(el);
		base.el = el;

		// Add a reverse reference to the DOM object
		base.$el.data("jqcron", base);

		base.init = function() {
		  base.options = $.extend({}, $.jqcron.defaultOptions, options);
	      base.doLayout(base.$el, base.options.data);
	      base.setValue(base.options.value);
		};

		base.doLayout = function(e,data) 
		{		    
		    var htmltemplate = `	  
						
			<ul class="nav nav-tabs" id="cronTab" role="tablist">
				<li class="nav-item" role="presentation">
					<button class="nav-link active" id="daily-tab" data-bs-toggle="tab" data-bs-target="#daily" type="button" role="tab" aria-controls="daily" aria-selected="true">Daily</button>
				</li>
				<li class="nav-item" role="presentation">
					<button class="nav-link" id="monthly-tab" data-bs-toggle="tab" data-bs-target="#monthly" type="button" role="tab" aria-controls="monthly" aria-selected="false">Monthly</button>
				</li>				
			</ul>

			<div class="tab-content jqcron" id="cronTabContent">
				<div class="tab-pane fade show active" id="daily" role="tabpanel" aria-labelledby="daily-tab">
				
					<div class="row">
					<div class = "col">
						Seconds:
						<ul>
						<li>
							<div class="option-row">
							<div class="col-s bordered"><input type="radio" name="cron-seconds" value="*"/></div>
							<div class="col-w bordered">Every Second (*)</div>
							</div>
						</li>          
						<li>
							<div class="option-row">
							<div class="col-s bordered"><input type="radio" name="cron-seconds" value="c"/></div>
							<div class="col-w bordered">Every ## seconds</div>
							<div class="col-m">
								<select class="form-control" id="c-seconds" name="c-seconds">
								<option value="0/10">10</option>
								<option value="0/15">15</option>
								<option value="0/20">20</option>
								<option value="0/30">30</option>
								</select>
							</div>                  
							</div>
						</li>
						<li>
							<div class="option-row">
							<div class="col-s bordered"><input type="radio" name="cron-seconds" value="s"></div>
							<div class="col-w bordered">Exactily at ## seconds</div>
							<div class="col-m">
								<select class="form-control" id="s-seconds" name="s-seconds">
								<option value="0">00</option>
								<option value="1">01</option>
								<option value="2">02</option>
								<option value="3">03</option>
								<option value="4">04</option>
								<option value="5">05</option>
								<option value="6">06</option>
								<option value="7">07</option>
								<option value="8">08</option>
								<option value="9">09</option>
								<option value="10">10</option>
								<option value="11">11</option>
								<option value="12">12</option>
								<option value="13">13</option>
								<option value="14">14</option>
								<option value="15">15</option>
								<option value="16">16</option>
								<option value="17">17</option>
								<option value="18">18</option>
								<option value="19">19</option>
								<option value="20">20</option>
								<option value="21">21</option>
								<option value="22">22</option>
								<option value="23">23</option>
								<option value="24">24</option>
								<option value="25">25</option>
								<option value="26">26</option>
								<option value="27">27</option>
								<option value="28">28</option>
								<option value="29">29</option>
								<option value="30">30</option>
								<option value="31">31</option>
								<option value="32">32</option>
								<option value="33">33</option>
								<option value="34">34</option>
								<option value="35">35</option>
								<option value="36">36</option>
								<option value="37">37</option>
								<option value="38">38</option>
								<option value="39">39</option>
								<option value="40">40</option>
								<option value="41">41</option>
								<option value="42">42</option>
								<option value="43">43</option>
								<option value="44">44</option>
								<option value="45">45</option>
								<option value="46">46</option>
								<option value="47">47</option>
								<option value="48">48</option>
								<option value="49">49</option>
								<option value="50">50</option>
								<option value="51">51</option>
								<option value="52">52</option>
								<option value="53">53</option>
								<option value="54">54</option>
								<option value="55">55</option>
								<option value="56">56</option>
								<option value="57">57</option>
								<option value="58">58</option>
								<option value="59">59</option>
								</select>
							</div>
							</div>
						</li>
						</ul> 
					</div>
		
					<div class = "col">  
						Minutes:
						<ul>
						<li>
							<div class="option-row">
							<div class="col-s bordered"><input type="radio" name="cron-minutes" value="*"/></div>
							<div class="col-w bordered">Every Minute (*)</div>
							</div>
						</li>          
						<li>
							<div class="option-row">
							<div class="col-s bordered"><input type="radio" name="cron-minutes" value="c"/></div>
							<div class="col-w bordered">Every ## minutes</div>
							<div class="col-m">
								<select class="form-control" id="c-minutes" name="c-cron-minutes">
								<option value="0/1">1</option>
								<option value="0/2">2</option>
								<option value="0/3">3</option>
								<option value="0/4">4</option>
								<option value="0/5">5</option>
								<option value="0/10">10</option>
								<option value="0/15">15</option>
								<option value="0/20">20</option>
								<option value="0/30">30</option>
								</select>
							</div>                  
							</div>
						</li>
						<li>
							<div class="option-row">
							<div class="col-s bordered"><input type="radio" name="cron-minutes" value="s"></div>
							<div class="col-w bordered">Exactily at minute ##</div>
							<div class="col-m">
								<select class="form-control" id="s-minutes" name="s-minutes">
								<option value="0">00</option>
								<option value="1">01</option>
								<option value="2">02</option>
								<option value="3">03</option>
								<option value="4">04</option>
								<option value="5">05</option>
								<option value="6">06</option>
								<option value="7">07</option>
								<option value="8">08</option>
								<option value="9">09</option>
								<option value="10">10</option>
								<option value="11">11</option>
								<option value="12">12</option>
								<option value="13">13</option>
								<option value="14">14</option>
								<option value="15">15</option>
								<option value="16">16</option>
								<option value="17">17</option>
								<option value="18">18</option>
								<option value="19">19</option>
								<option value="20">20</option>
								<option value="21">21</option>
								<option value="22">22</option>
								<option value="23">23</option>
								<option value="24">24</option>
								<option value="25">25</option>
								<option value="26">26</option>
								<option value="27">27</option>
								<option value="28">28</option>
								<option value="29">29</option>
								<option value="30">30</option>
								<option value="31">31</option>
								<option value="32">32</option>
								<option value="33">33</option>
								<option value="34">34</option>
								<option value="35">35</option>
								<option value="36">36</option>
								<option value="37">37</option>
								<option value="38">38</option>
								<option value="39">39</option>
								<option value="40">40</option>
								<option value="41">41</option>
								<option value="42">42</option>
								<option value="43">43</option>
								<option value="44">44</option>
								<option value="45">45</option>
								<option value="46">46</option>
								<option value="47">47</option>
								<option value="48">48</option>
								<option value="49">49</option>
								<option value="50">50</option>
								<option value="51">51</option>
								<option value="52">52</option>
								<option value="53">53</option>
								<option value="54">54</option>
								<option value="55">55</option>
								<option value="56">56</option>
								<option value="57">57</option>
								<option value="58">58</option>
								<option value="59">59</option>
								</select>
							</div>
							</div>
						</li>
						</ul> 
					</div>
		
					<div class = "col">
						Hours:
						<ul>
						<li>
							<div class="option-row">
							<div class="col-s bordered"><input type="radio" name="cron-hours" value="*"/></div>
							<div class="col-w bordered">Every Hour (*)</div>
							</div>
						</li>          
						<li>
							<div class="option-row">
							<div class="col-s bordered"><input type="radio" name="cron-hours" value="c"/></div>
							<div class="col-w bordered">Every ## hours</div>
							<div class="col-m">
								<select class="form-control" id="c-hours" name="c-hours">
								<option value="0/2">2</option>
								<option value="0/3">3</option>
								<option value="0/3">4</option>
								<option value="0/4">5</option>
								<option value="0/6">6</option>
								<option value="0/12">12</option>
								</select>
							</div>                  
							</div>
						</li>
						<li>
							<div class="option-row">
							<div class="col-s bordered"><input type="radio" name="cron-hours" value="s"></div>
							<div class="col-w bordered">Exactily at hour ## </div>
							<div class="col-m">
								<select class="form-control" id="s-hours" name="s-hours">
								<option value="0">00</option>
								<option value="1">01</option>
								<option value="2">02</option>
								<option value="3">03</option>
								<option value="4">04</option>
								<option value="5">05</option>
								<option value="6">06</option>
								<option value="7">07</option>
								<option value="8">08</option>
								<option value="9">09</option>
								<option value="10">10</option>
								<option value="11">11</option>
								<option value="12">12</option>
								<option value="13">13</option>
								<option value="14">14</option>
								<option value="15">15</option>
								<option value="16">16</option>
								<option value="17">17</option>
								<option value="18">18</option>
								<option value="19">19</option>
								<option value="20">20</option>
								<option value="21">21</option>
								<option value="22">22</option>
								<option value="23">23</option>                          
								</select>
							</div>
							</div>
						</li>
						</ul> 
					</div>
	            </div>
				
				</div>
				<div class="tab-pane fade jqcron" id="monthly" role="tabpanel" aria-labelledby="monthly-tab">
					<div class="row">
					<div class = "col">
						Days of Month:
						<ul>
						<li>
							<div class="option-row">
							<div class="col-s bordered"><input type="radio" name="cron-days" value="?"/></div>
							<div class="col-w bordered">No specific day (?)</div>
							</div>
						</li>
						<li>
							<div class="option-row">
							<div class="col-s bordered"><input type="radio" name="cron-days" value="*"/></div>
							<div class="col-w bordered">Every Day (*)</div>
							</div>
						</li>          
						<li>
							<div class="option-row">
							<div class="col-s bordered"><input type="radio" name="cron-days" value="c"/></div>
							<div class="col-w bordered">Every ## days</div>
							<div class="col-m">
								<select class="form-control" id="c-days" name="c-days">
									<option value="1/2">2</option>
									<option value="1/3">3</option>
									<option value="1/4">4</option>
									<option value="1/5">5</option>
									<option value="1/10">10</option>
									<option value="1/15">15</option>  
								</select>
							</div>                  
							</div>
						</li>
						<li>
							<div class="option-row">
							<div class="col-s bordered"><input type="radio" name="cron-days" value="s"></div>
							<div class="col-w bordered">Only on day ## </div>
							<div class="col-m">
								<select class="form-control" id="s-days" name="s-days">
								<option value="1">01</option>
								<option value="2">02</option>
								<option value="3">03</option>
								<option value="4">04</option>
								<option value="5">05</option>
								<option value="6">06</option>
								<option value="7">07</option>
								<option value="8">08</option>
								<option value="9">09</option>
								<option value="10">10</option>
								<option value="11">11</option>
								<option value="12">12</option>
								<option value="13">13</option>
								<option value="14">14</option>
								<option value="15">15</option>
								<option value="16">16</option>
								<option value="17">17</option>
								<option value="18">18</option>
								<option value="19">19</option>
								<option value="20">20</option>
								<option value="21">21</option>
								<option value="22">22</option>
								<option value="23">23</option>
								<option value="24">24</option>
								<option value="25">25</option>
								<option value="26">26</option>
								<option value="27">27</option>
								<option value="28">28</option>
								<option value="29">29</option>
								<option value="30">30</option>
								<option value="31">31</option>
								</select>
							</div>
							</div>
						</li>
						</ul> 
					</div>
		
					<div class = "col">  
						Months:
						<ul>
						<li>
							<div class="option-row">                    
							</div>
						</li>   
						<li>
							<div class="option-row">
							<div class="col-s bordered"><input type="radio" name="cron-months" value="*"/></div>
							<div class="col-w bordered">Every Month (*)</div>
							</div>
						</li>          
						<li>
							<div class="option-row">
							<div class="col-s bordered"><input type="radio" name="cron-months" value="c"/></div>
							<div class="col-w bordered">Every ## months</div>
							<div class="col-m">
								<select class="form-control" id="c-months" name="c-months">
								<option value="1/2">2</option>
								<option value="1/3">3</option>
								<option value="1/4">4</option>
								<option value="1/5">5</option>
								<option value="1/6">6</option>
								</select>
							</div>                  
							</div>
						</li>
						<li>
							<div class="option-row">
							<div class="col-s bordered"><input type="radio" name="cron-months" value="s"></div>
							<div class="col-w bordered">Only in</div>
							<div class="col-m">
								<select class="form-control" id="s-months" name="s-months">
								<option  value="1">JAN</option>
								<option value="2">FEB</option>
								<option value="3">MAR</option>
								<option value="4">APR</option>
								<option value="5">MAY</option>
								<option value="6">JUN</option>
								<option value="7">JUL</option>
								<option value="8">AUG</option>
								<option value="9">SEP</option>
								<option value="10">OCT</option>
								<option value="11">NOV</option>
								<option value="12">DEC</option>
								</select>
							</div>
							</div>
						</li>
						</ul> 
					</div>
		
					<div class = "col">
						Days of Week:
						<ul>
						<li>
							<div class="option-row">
							<div class="col-s bordered"><input type="radio" name="cron-wdays" value="?"/></div>
							<div class="col-w bordered">No specific day (?)</div>
							</div>
						</li>                          
						<li>
							<div class="option-row-3">
							<div class="col-s bordered"><input type="radio" name="cron-wdays" value="s"/></div>
							<div class="col-w bordered">Only on</div>
							<div class="col-m">
								<select class="form-control" id="s-wdays" name="s-wdays" multiple="true">              
								<option value="1">SUN</option>
								<option value="2">MON</option>
								<option value="3">TUE</option>
								<option value="4">WED</option>
								<option value="5">THU</option>   
								<option value="6">FRE</option> 
								<option value="7">SAT</option>           
								</select>
							</div>                  
							</div>
						</li>                  
						</ul> 
					</div>
				
				</div>
			</div>
      `;

      var component = $(htmltemplate);
      e.addClass('qrtz-cron');
	  e.append(component);

      e.find('input').on('change',function(){ base.triggerChange() });
      e.find('select').on('change',function(){ base.triggerChange() });
      e.find('.nav-item').on('click',function(){ $('.nav-item').toggleClass('nav-selected'); });
	};

    base.setValue = function(value)
    {    
        var sel = ['seconds','minutes','hours','days','months','wdays'];
        
        if (value)
        {
            var sv = value.split(' ');

            for (var x=0; x<sv.length; x++)
            {   
                var v = sv[x] ;

                if ((v=='*') || (v=='?'))
                {
                    $("input[name='cron-" + sel[x] + "']").filter("[value='" + v + "']").prop('checked',true) ;   
                }
                else
                {
                    if (v.match(/\d+\/\d+/))
                    {
                      $("input[name='cron-" + sel[x] + "']").filter("[value='c']").prop('checked',true) ;
                      $("#c-" + sel[x] ).val(v)  ;  
                    }
                    else
                    { 
                      $("input[name='cron-" + sel[x] + "']").filter("[value='s']").prop('checked',true) ;
                      $.each(v.split(","), function(i,e){
                          $("#s-" + sel[x] + " option[value='" + e + "']").prop("selected", true);
                      });                      
                    }
                }
            }
        }

        base.triggerChange(v);
    }

    base.getCrontab = function()
    {
        var cron = [] ;
        var i = ['seconds','minutes','hours','days','months','wdays'];

        i.forEach( function(c)
        {
            var chk = $("input[name='cron-" + c + "']:checked").val() ;            
            if ((chk!='*')&&(chk!='?'))
              cron.push( $("#" + chk + "-" + c).val() ); 
            else
              cron.push( chk );                       
        });

        return cron.join(' ');
    }

    base.triggerChange = function(v){
      if (base.options.onChange)
      {
        base.options.onChange(base.getCrontab());
      }
    }

	// Run initializer
	base.init();

    return base ;

	};

	$.jqcron.defaultOptions = {
		value : "0 0/15 * * * ?"
	};

	$.fn.jqcron = function(options) {
		return new $.jqcron(this, options);	
	};

})(jQuery);
