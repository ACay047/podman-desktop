<script lang="ts">
interface Props {
  size?: string;
  class?: string;
  style?: string;
}
let { size = '40', class: className, style }: Props = $props();
</script>

<svg
  width={size}
  height={size}
  class={className}
  style={style}
  viewBox="4.336 0.105 1.745 1.66"
  version="1.1"
  xml:space="preserve"
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <radialGradient
      gradientUnits="userSpaceOnUse"
      gradientTransform="matrix(.3909 .71073 -.84194 .46307 86.049 -23.543)"
      r="7.0467"
      cy="50.591"
      cx="71.342"
      id="radialGradient11297">
      <stop id="stop833" offset="0" stop-color="#fffbce"></stop>
      <stop id="stop835" offset="1" stop-color="#ffe500"></stop>
    </radialGradient>
  </defs>
  <g transform="translate(13.762,-26.678)">
    <g transform="translate(-29.906,26.92) scale(0.26458,0.26458)">
      <path
        style="stroke:#18181b;fill:none"
        stroke-width="10"
        d="m 74.843,56.148 -3.5805,-2.3908 -3.9993,1.5941 1.1674,-4.1441 -2.752,-3.311 4.302,-0.17036 2.2985,-3.6404 1.4914,4.0388 4.1725,1.0611 -3.3802,2.6665 z"
        transform="matrix(0.53196,-0.054438,0.054365,0.53134,39.865,-20.008)"></path>
      <path
        stroke-width="0.93558"
        stroke-linejoin="round"
        stroke-linecap="round"
        fill="url(#radialGradient11297)"
        d="m 74.843,56.148 -3.5805,-2.3908 -3.9993,1.5941 1.1674,-4.1441 -2.752,-3.311 4.302,-0.17036 2.2985,-3.6404 1.4914,4.0388 4.1725,1.0611 -3.3802,2.6665 z"
        transform="matrix(0.53196,-0.054438,0.054365,0.53134,39.865,-20.008)"></path>
    </g>
  </g>
</svg>
