import { IconBook, IconCalendar, IconGift, IconHeart, IconUsers } from './Icons';
import community from '../assets/images/community.jpg';

/** A stylised home screen, drawn in HTML so it stays sharp at any size. */
export function PhoneMockup() {
  return (
    <div className="phone" role="img" aria-label="The Church Life home screen">
      <div className="phone__screen">
        <div className="phone__notch" />
        <div className="phone__top">
          <small>Good morning,</small>
          <b>[Member name]</b>
        </div>

        <div className="phone__card">
          <div className="phone__label">Today&apos;s reading</div>
          <div className="phone__title">[Reading reference]</div>
          <div className="phone__meta">Reflection from your parish priest</div>
        </div>

        <div className="phone__slide">
          <img src={community} alt="" />
          <span>Parish community gathering</span>
        </div>

        <div className="phone__grid">
          <div className="phone__tile">
            <i><IconCalendar /></i>Mass
          </div>
          <div className="phone__tile">
            <i><IconBook /></i>Readings
          </div>
          <div className="phone__tile">
            <i><IconUsers /></i>Groups
          </div>
          <div className="phone__tile">
            <i><IconHeart /></i>Support
          </div>
        </div>

        <div className="phone__row">
          <i><IconGift /></i>
          <div>
            <b>Celebrating this week</b>
            <span>Send a wish and a prayer</span>
          </div>
        </div>

        <div className="phone__tabs" aria-hidden="true">
          <span />
          <span />
          <span />
          <span />
        </div>
      </div>
    </div>
  );
}
