﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.Fotokiosk7
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Оплата.
    /// </summary>
    // *** Start programmer edit section *** (Оплата CustomAttributes)

    // *** End programmer edit section *** (Оплата CustomAttributes)
    [AutoAltered()]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("ОплатаE", new string[] {
            "СпособОпл as \'Способ оплаты\'",
            "Дата as \'Дата оплаты\'",
            "Время as \'Время оплаты\'",
            "СделатьФото.КатегорФото as \'Сделанное фото\'",
            "СделатьФото.Цена as \'Стоимость\'"})]
    [View("ОплатаL", new string[] {
            "СпособОпл as \'Способ оплаты\'",
            "Дата as \'Дата оплаты\'",
            "Время as \'Время оплаты\'",
            "СделатьФото.КатегорФото as \'Сделанное фото\'",
            "СделатьФото.Цена as \'Стоимость\'"})]
    public class Оплата : ICSSoft.STORMNET.DataObject
    {
        
        private IIS.Fotokiosk7.ВидОплаты fСпособОпл;
        
        private int fСумма;
        
        private string fВремя;
        
        private System.DateTime fДата;
        
        private IIS.Fotokiosk7.СделатьФото fСделатьФото;
        
        // *** Start programmer edit section *** (Оплата CustomMembers)

        // *** End programmer edit section *** (Оплата CustomMembers)

        
        /// <summary>
        /// Время.
        /// </summary>
        // *** Start programmer edit section *** (Оплата.Время CustomAttributes)

        // *** End programmer edit section *** (Оплата.Время CustomAttributes)
        [StrLen(255)]
        public virtual string Время
        {
            get
            {
                // *** Start programmer edit section *** (Оплата.Время Get start)

                // *** End programmer edit section *** (Оплата.Время Get start)
                string result = this.fВремя;
                // *** Start programmer edit section *** (Оплата.Время Get end)

                // *** End programmer edit section *** (Оплата.Время Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Оплата.Время Set start)

                // *** End programmer edit section *** (Оплата.Время Set start)
                this.fВремя = value;
                // *** Start programmer edit section *** (Оплата.Время Set end)

                // *** End programmer edit section *** (Оплата.Время Set end)
            }
        }
        
        /// <summary>
        /// Дата.
        /// </summary>
        // *** Start programmer edit section *** (Оплата.Дата CustomAttributes)

        // *** End programmer edit section *** (Оплата.Дата CustomAttributes)
        public virtual System.DateTime Дата
        {
            get
            {
                // *** Start programmer edit section *** (Оплата.Дата Get start)

                // *** End programmer edit section *** (Оплата.Дата Get start)
                System.DateTime result = this.fДата;
                // *** Start programmer edit section *** (Оплата.Дата Get end)

                // *** End programmer edit section *** (Оплата.Дата Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Оплата.Дата Set start)

                // *** End programmer edit section *** (Оплата.Дата Set start)
                this.fДата = value;
                // *** Start programmer edit section *** (Оплата.Дата Set end)

                // *** End programmer edit section *** (Оплата.Дата Set end)
            }
        }
        
        /// <summary>
        /// СпособОпл.
        /// </summary>
        // *** Start programmer edit section *** (Оплата.СпособОпл CustomAttributes)

        // *** End programmer edit section *** (Оплата.СпособОпл CustomAttributes)
        public virtual IIS.Fotokiosk7.ВидОплаты СпособОпл
        {
            get
            {
                // *** Start programmer edit section *** (Оплата.СпособОпл Get start)

                // *** End programmer edit section *** (Оплата.СпособОпл Get start)
                IIS.Fotokiosk7.ВидОплаты result = this.fСпособОпл;
                // *** Start programmer edit section *** (Оплата.СпособОпл Get end)

                // *** End programmer edit section *** (Оплата.СпособОпл Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Оплата.СпособОпл Set start)

                // *** End programmer edit section *** (Оплата.СпособОпл Set start)
                this.fСпособОпл = value;
                // *** Start programmer edit section *** (Оплата.СпособОпл Set end)

                // *** End programmer edit section *** (Оплата.СпособОпл Set end)
            }
        }
        
        /// <summary>
        /// Сумма.
        /// </summary>
        // *** Start programmer edit section *** (Оплата.Сумма CustomAttributes)

        // *** End programmer edit section *** (Оплата.Сумма CustomAttributes)
        public virtual int Сумма
        {
            get
            {
                // *** Start programmer edit section *** (Оплата.Сумма Get start)

                // *** End programmer edit section *** (Оплата.Сумма Get start)
                int result = this.fСумма;
                // *** Start programmer edit section *** (Оплата.Сумма Get end)

                // *** End programmer edit section *** (Оплата.Сумма Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Оплата.Сумма Set start)

                // *** End programmer edit section *** (Оплата.Сумма Set start)
                this.fСумма = value;
                // *** Start programmer edit section *** (Оплата.Сумма Set end)

                // *** End programmer edit section *** (Оплата.Сумма Set end)
            }
        }
        
        /// <summary>
        /// Оплата.
        /// </summary>
        // *** Start programmer edit section *** (Оплата.СделатьФото CustomAttributes)

        // *** End programmer edit section *** (Оплата.СделатьФото CustomAttributes)
        [PropertyStorage(new string[] {
                "СделатьФото"})]
        [NotNull()]
        public virtual IIS.Fotokiosk7.СделатьФото СделатьФото
        {
            get
            {
                // *** Start programmer edit section *** (Оплата.СделатьФото Get start)

                // *** End programmer edit section *** (Оплата.СделатьФото Get start)
                IIS.Fotokiosk7.СделатьФото result = this.fСделатьФото;
                // *** Start programmer edit section *** (Оплата.СделатьФото Get end)

                // *** End programmer edit section *** (Оплата.СделатьФото Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Оплата.СделатьФото Set start)

                // *** End programmer edit section *** (Оплата.СделатьФото Set start)
                this.fСделатьФото = value;
                // *** Start programmer edit section *** (Оплата.СделатьФото Set end)

                // *** End programmer edit section *** (Оплата.СделатьФото Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "ОплатаE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ОплатаE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ОплатаE", typeof(IIS.Fotokiosk7.Оплата));
                }
            }
            
            /// <summary>
            /// "ОплатаL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ОплатаL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ОплатаL", typeof(IIS.Fotokiosk7.Оплата));
                }
            }
        }
    }
}
