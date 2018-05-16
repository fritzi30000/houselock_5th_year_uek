/***********************************************************************************
 * Dashboard Services
 ***********************************************************************************/

myApp.services.dashboard = {

    noLastBill: function(page) {
        let info = ons.createElement('<div>Brak rachunków dla mieszkania.</div>');
        page.querySelector('.content').appendChild(info);
    },

    editFlat: function(page) {

    },

    displayCurrentFlat: function(page, info) {
        console.log(info);
        let flat = ons.createElement(
            '<form data-ajax="/api/flat/' + info.id + '" method="post" id="flat_info_save">' +
            '<div><ons-list-header>' + info.name + '</ons-list-header>' +
            '<ons-list-item><div>Adres:  </div><div>ul. ' + info.street + ' ' + info.building_number + '/' + info.flat_number + '</div></ons-list-item>' +
            '<div class="edit" style="display: none">' +
            '<ons-input id="street" name="street" modifier="underbar" minLength="1" maxLength="50" placeholder="Ulica" value="' + info.street + '" float class="edit hidden"> </ons-input>' +
            '<ons-input id="building_number" name="building_number" min="1" max="1000" modifier="underbar" placeholder="Numer budynku" value="' + info.building_number + '" float class="edit hidden"> </ons-input>' +
            '<ons-input id="flat_number" name="flat_number" modifier="underbar" placeholder="Numer mieszkania" value="' + info.flat_number + '" float class="edit hidden"> </ons-input>' +
            '</div>' +
            '<ons-list-item>Miasto i kod pocztowy:  ' + info.city + ' ' + info.postal_code + '</ons-list-item>' +
            '<div class="edit" style="display: none">' +
            '<ons-input id="city" name="city" modifier="underbar" placeholder="Miasto" value="' + info.city + '" float class="edit hidden"> </ons-input>' +
            '<ons-input id="postal_code" name="postal_code" modifier="underbar" placeholder="Kod pocztowy" value="' + info.postal_code + '" float class="edit hidden"> </ons-input>' +
            '</div>' +
            '<ons-list-item>Kwota za wynajem:  ' + info.mercenary + ' PLN</ons-list-item>' +
            '<div class="edit" style="display: none">' +
            '<ons-input id="mercenary" name="mercenary" modifier="underbar" placeholder="Kwota za wynajem" value="' + info.mercenary + '" float class="edit hidden"> </ons-input>' +
            '</div>' +
            '<ons-list-item>Dzień płatności:  ' + info.pay_day + '</ons-list-item>' +
            '<div class="edit" style="display: none">' +
            '<ons-input id="pay_day" name="pay_day" modifier="underbar" placeholder="Dzien płatności" value="' + info.pay_day + '" float class="edit hidden"> </ons-input>' +
            '</div><div class="edit hidden">' + '<ons-list-header>Ustawienia mediów</ons-list-header>'+
            '<ons-checkbox id="flat_gas_config" name="flat_gas_config" modifier="underbar" float class="edit hidden"></ons-checkbox><label for="flat-gas-config">Gaz</label></div>' +
            '<ons-radio group="gas_payment_option"></ons-radio><ons-radio group="gas_payment_option"></ons-radio>'+'<ons-input id="flat_gas_price" placeholder="Kwota" float class="edit hidden"></ons-input>'+
            
            '<ons-button style="display:none;" modifier="large" component="button/save">Zapisz</ons-button>' +
            '<ons-button style="display:none;" modifier="large" component="button/cancel">Anuluj</ons-button>' +
            '</div>' + '</form>'
        );
        page.querySelector('.content').appendChild(flat);

        page.querySelector('[component="button/save"]').onclick = function() {
            myApp.services.flat.update(page, info)
        };
        myApp.services.common.edit(page);
        myApp.services.common.cancel(page);


    },

};