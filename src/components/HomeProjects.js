import { trackOutbound } from 'src/shared/track-outbound';
import { Atropos } from 'atropos/react';

export default function HomeProjects() {
  return (
    <div className="space-y-8 sm:flex sm:space-y-0 sm:space-x-8">
      <Atropos
        component="a"
        highlight
        href="https://framework7.io"
        target="_blank"
        className="project-banner project-banner-f7 mx-auto inline-block sm:block"
        innerClassName="border border-black border-opacity-10 hover:border-opacity-0"
        rotateTouch="scroll-y"
        onClick={() => trackOutbound('https://framework7.io')}
      >
        <img
          className="project-banner-spacer"
          src="/images/projects/f7-frame.svg"
          alt="framework7 logo"
        />
        <img
          data-atropos-offset="-2.5"
          src="/images/projects/f7-frame.svg"
          alt="framework7 logo"
        />
        <img
          data-atropos-offset="0"
          src="/images/projects/f7-logo.svg"
          alt="framework7 logo"
        />
        <img
          data-atropos-offset="5"
          src="/images/projects/f7-work.svg"
          alt="framework7 logo"
        />
      </Atropos>
      <Atropos
        component="a"
        highlight
        href="https://konstaui.com"
        target="_blank"
        className="project-banner project-banner-twm mx-auto inline-block sm:block"
        onClick={() => trackOutbound('https://konstaui.com')}
        innerClassName="border border-black border-opacity-10 hover:border-opacity-0"
        rotateTouch="scroll-y"
      >
        <img
          className="project-banner-spacer"
          src="/images/projects/twm-text.svg"
          alt="konsta-logo"
        />
        <img
          data-atropos-offset="0"
          src="/images/projects/twm-text.svg"
          alt="konsta-logo"
        />
        <img
          data-atropos-offset="2.5"
          src="/images/projects/twm-logo-back.svg"
          alt="konsta-logo"
        />
        <img
          data-atropos-offset="5"
          src="/images/projects/twm-logo-top.svg"
          alt="konsta-logo"
        />
        <img
          data-atropos-offset="7.5"
          src="/images/projects/twm-logo-bottom.svg"
          alt="konsta-logo"
        />
      </Atropos>
      <Atropos
        component="a"
        highlight
        href="https://atroposjs.com"
        target="_blank"
        className="project-banner project-banner-atropos mx-auto inline-block sm:block"
        innerClassName="border border-black border-opacity-10 hover:border-opacity-0"
        rotateTouch="scroll-y"
        onClick={() => trackOutbound('https://atroposjs.com')}
      >
        <img
          className="project-banner-spacer"
          src="/images/projects/atropos-text.svg"
          alt="atropos-logo"
        />
        <img
          data-atropos-offset="0"
          src="/images/projects/atropos-text.svg"
          alt="atropos-logo"
        />
        <img
          data-atropos-offset="3"
          src="/images/projects/atropos-logo-back.svg"
          alt="atropos-logo"
        />
        <img
          data-atropos-offset="6"
          src="/images/projects/atropos-logo-front.svg"
          alt="atropos-logo"
        />
        <span
          data-atropos-offset="25"
          className="project-banner-badge absolute right-4 top-4 z-10 rounded-full bg-green-500 py-1 px-2 text-xs font-semibold text-white"
        >
          NEW
        </span>
      </Atropos>
    </div>
  );
}
