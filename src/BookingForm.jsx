import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './BookingForm.css';

const BookingForm = () => {
  const [tripType, setTripType] = useState('round-trip');
  const [currency, setCurrency] = useState('INR');
  const [selectedPromo, setSelectedPromo] = useState(null);
  const [departDate, setDepartDate] = useState(null);
  const [returnDate, setReturnDate] = useState(null);

  const handleTripTypeChange = (event) => {
    setTripType(event.target.value);
  };

  const handleCurrencyChange = (event) => {
    setCurrency(event.target.value);
  };

  const handlePromoClick = (promo) => {
    setSelectedPromo(selectedPromo === promo ? null : promo);
  };

  const handleCloseClick = () => {
    setSelectedPromo(null);
  };

  return (
    <form className="booking-form">
      <div className="trip-options">
        <div className="trip-type">
          <label>
            <input
              type="radio"
              value="round-trip"
              checked={tripType === 'round-trip'}
              onChange={handleTripTypeChange}
            />
            往返
          </label>
          <label>
            <input
              type="radio"
              value="one-way"
              checked={tripType === 'one-way'}
              onChange={handleTripTypeChange}
            />
            单程
          </label>
          <label>
            <input
              type="radio"
              value="multi-city"
              checked={tripType === 'multi-city'}
              onChange={handleTripTypeChange}
            />
            多城市
          </label>
        </div>
        <div className="currency-dropdown-container">
          <label htmlFor="currency">货币</label>
          <select id="currency" name="currency" value={currency} onChange={handleCurrencyChange} className="currency-dropdown">
            <option value="INR">印度卢比</option>
            <option value="THB">泰铢</option>
            <option value="USD">美元</option>
            <option value="CNY">人民币</option>
          </select>
        </div>
      </div>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="from">出发地</label>
          <input type="text" id="from" name="from" placeholder="选择出发地" list="from-options" />
          <datalist id="from-options">
            <option value="HYD - 海得拉巴" />
            <option value="BLR - 班加罗尔" />
            <option value="DEL - 德里" />
          </datalist>
        </div>
        <div className="form-group">
          <label htmlFor="to">目的地</label>
          <input type="text" id="to" name="to" placeholder="选择目的地" list="to-options" />
          <datalist id="to-options">
            <option value="DMK - 廊曼" />
            <option value="CNX - 清迈" />
            <option value="CEI - 清莱" />
            <option value="HKT - 普吉" />
            <option value="KBV - 甲米" />
          </datalist>
        </div>
      </div>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="depart">出发日期</label>
          <DatePicker
            selected={departDate}
            onChange={(date) => setDepartDate(date)}
            dateFormat="yyyy-MM-dd"
            placeholderText="选择出发日期"
            className="date-picker"
          />
        </div>
        <div className="form-group">
          <label htmlFor="return">返回日期</label>
          <DatePicker
            selected={returnDate}
            onChange={(date) => setReturnDate(date)}
            dateFormat="yyyy-MM-dd"
            placeholderText="选择返回日期"
            className="date-picker"
          />
        </div>
        <div className="form-group">
          <label htmlFor="passengers">乘客</label>
          <select id="passengers" name="passengers">
            <option>1 成人</option>
            <option>2 成人</option>
            <option>3 成人</option>
            <option>4 成人</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="promoCode">促销代码</label>
          <input type="text" id="promoCode" name="promoCode" placeholder="促销代码" />
        </div>
      </div>
      <div className="form-row form-row-bottom">
        <div className="form-group">
          <label htmlFor="lowestFare">最低票价</label>
          <input type="checkbox" id="lowestFare" name="lowestFare" className="small-checkbox" />
        </div>
        <button type="submit" className="search-button">搜索</button>
      </div>
      <div className="image-row">
        <div className="promo-item">
          <p>到清迈 40,000 INR</p>
          <img
            src="https://assets.airtrfx.com/cdn-cgi/image/height=500,width=800,quality=80,fit=crop,format=auto,opt=true/https://media.jtdwjcwq6f4wp4ce.com/tg/ChiangMai_Thailand.jpg"
            alt="清迈"
            className="promo-image"
            onClick={() => handlePromoClick('chiang-mai')}
          />
          {selectedPromo === 'chiang-mai' && (
            <div className="promo-book-box">
              <span className="close-icon" onClick={handleCloseClick}>×</span>
              <button>查看</button>
              <label>出发: <DatePicker selected={departDate} onChange={(date) => setDepartDate(date)} dateFormat="yyyy-MM-dd" placeholderText="选择日期" /></label>
              <label>返回: <DatePicker selected={returnDate} onChange={(date) => setReturnDate(date)} dateFormat="yyyy-MM-dd" placeholderText="选择日期" /></label>
              <label>乘客:
                <select>
                  <option>1 成人</option>
                  <option>2 成人</option>
                  <option>3 成人</option>
                  <option>4 成人</option>
                </select>
              </label>
              <div className="checkbox-group">
                <label><input type="checkbox" /> 酒店</label>
                <label><input type="checkbox" /> 交通</label>
                <label><input type="checkbox" /> 旅游保险</label>
                <label><input type="checkbox" /> 额外行李</label>
                <label><input type="checkbox" /> 水疗</label>
              </div>
              <label>促销代码: <input type="text" /></label>
              <button>购买</button>
            </div>
          )}
        </div>
        <div className="promo-item">
          <p>到曼谷 35,000 INR</p>
          <img
            src="https://assets.airtrfx.com/media-em/tg/65572ced07a8f_Bangkok_Temple.jpg?height=500&width=800&quality=80&fit=crop&format=auto&opt=true"
            alt="曼谷寺庙"
            className="promo-image"
            onClick={() => handlePromoClick('bangkok')}
          />
          {selectedPromo === 'bangkok' && (
            <div className="promo-book-box">
              <span className="close-icon" onClick={handleCloseClick}>×</span>
              <button>查看</button>
              <label>出发: <DatePicker selected={departDate} onChange={(date) => setDepartDate(date)} dateFormat="yyyy-MM-dd" placeholderText="选择日期" /></label>
              <label>返回: <DatePicker selected={returnDate} onChange={(date) => setReturnDate(date)} dateFormat="yyyy-MM-dd" placeholderText="选择日期" /></label>
              <label>乘客:
                <select>
                  <option>1 成人</option>
                  <option>2 成人</option>
                  <option>3 成人</option>
                  <option>4 成人</option>
                </select>
              </label>
              <div className="checkbox-group">
                <label><input type="checkbox" /> 酒店</label>
                <label><input type="checkbox" /> 交通</label>
                <label><input type="checkbox" /> 保险</label>
                <label><input type="checkbox" /> 额外行李</label>
                <label><input type="checkbox" /> 水疗</label>
              </div>
              <label>促销代码: <input type="text" /></label>
              <button>购买</button>
            </div>
          )}
        </div>
        <div className="promo-item">
          <p>到普吉岛 40,000 INR</p>
          <img
            src="https://assets.airtrfx.com/cdn-cgi/image/height=500,width=800,quality=80,fit=crop,format=auto,opt=true/https://media.jtdwjcwq6f4wp4ce.com/tg/Phuket_Thailand.jpg"
            alt="普吉岛"
            className="promo-image"
            onClick={() => handlePromoClick('phuket')}
          />
          {selectedPromo === 'phuket' && (
            <div className="promo-book-box">
              <span className="close-icon" onClick={handleCloseClick}>×</span>
              <button>查看</button>
              <label>出发: <DatePicker selected={departDate} onChange={(date) => setDepartDate(date)} dateFormat="yyyy-MM-dd" placeholderText="选择日期" /></label>
              <label>返回: <DatePicker selected={returnDate} onChange={(date) => setReturnDate(date)} dateFormat="yyyy-MM-dd" placeholderText="选择日期" /></label>
              <label>乘客:
                <select>
                  <option>1 成人</option>
                  <option>2 成人</option>
                  <option>3 成人</option>
                  <option>4 成人</option>
                </select>
              </label>
              <div className="checkbox-group">
                <label><input type="checkbox" /> 酒店</label>
                <label><input type="checkbox" /> 交通</label>
                <label><input type="checkbox" /> 旅游保险</label>
                <label><input type="checkbox" /> 额外行李</label>
                <label><input type="checkbox" /> 水疗</label>
              </div>
              <label>促销代码: <input type="text" /></label>
              <button>购买</button>
            </div>
          )}
        </div>
        <div className="promo-item">
          <p>到甲米 40,000 INR</p>
          <img
            src="https://content.r9cdn.net/rimg/dimg/d7/d3/e9304e90-city-44862-164ae46b3a9.jpg?crop=true&width=1020&height=498"
            alt="甲米"
            className="promo-image"
            onClick={() => handlePromoClick('krabi')}
          />
          {selectedPromo === 'krabi' && (
            <div className="promo-book-box">
              <span className="close-icon" onClick={handleCloseClick}>×</span>
              <button>查看</button>
              <label>出发: <DatePicker selected={departDate} onChange={(date) => setDepartDate(date)} dateFormat="yyyy-MM-dd" placeholderText="选择日期" /></label>
              <label>返回: <DatePicker selected={returnDate} onChange={(date) => setReturnDate(date)} dateFormat="yyyy-MM-dd" placeholderText="选择日期" /></label>
              <label>乘客:
                <select>
                  <option>1 成人</option>
                  <option>2 成人</option>
                  <option>3 成人</option>
                  <option>4 成人</option>
                </select>
              </label>
              <div className="checkbox-group">
                <label><input type="checkbox" /> 酒店</label>
                <label><input type="checkbox" /> 交通</label>
                <label><input type="checkbox" /> 旅游保险</label>
                <label><input type="checkbox" /> 额外行李</label>
                <label><input type="checkbox" /> 水疗</label>
              </div>
              <label>促销代码: <input type="text" /></label>
              <button>购买</button>
            </div>
          )}
        </div>
      </div>
    </form>
  );
};

export default BookingForm;
