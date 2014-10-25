# Angular Password Validator
A simple directive to validate if two password fields match.

# Usage

    <div ng-app="myApp">
    Try me!
        <form name="form">
            <div data-password-manager>
                <input name="fieldOne" type="text" data-ng-model="fieldOne"
                data-password-field-one/>

                <input name="fieldTwo" type="text" data-ng-model="fieldTwo"
                    data-password-field-two/>
                        
                <span class="red" ng-if="form.$invalid">wrong</span>
            </div>
        </form>
    </div>
  
# Sample
Sample fiddle
http://jsfiddle.net/2actzc6x/1/
