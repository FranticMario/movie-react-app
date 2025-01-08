interface IIconProps {
     className?: string;
 }

const ProfileIcon: React.FC<IIconProps> = ({className}) => {
    return ( 

<svg className={`${className} hover:text-red-500`} width="18" height="23" viewBox="0 0 18 23" fill="currentColor" xmlns="http://www.w3.org/2000/svg"> <path d="M0.818146 18.804C0.818146 15.81 4.73415 15.063 9.31815 15.063C13.9281 15.063 17.8181 15.838 17.8181 18.83C17.8181 21.822 13.9021 22.571 9.31815 22.571C4.70915 22.571 0.818146 21.796 0.818146 18.804ZM3.69315 6.39098C3.67724 5.63868 3.81045 4.89068 4.08509 4.19012C4.35972 3.48956 4.77035 2.85031 5.29329 2.30925C5.81622 1.76818 6.44111 1.33601 7.13191 1.03767C7.82271 0.739329 8.56574 0.580717 9.31815 0.570984C10.0706 0.580717 10.8136 0.739329 11.5044 1.03767C12.1952 1.33601 12.8201 1.76818 13.343 2.30925C13.8659 2.85031 14.2766 3.48956 14.5512 4.19012C14.8258 4.89068 14.9591 5.63868 14.9431 6.39098C14.9586 7.14328 14.8252 7.89121 14.5504 8.5917C14.2757 9.2922 13.865 9.93142 13.3422 10.4726C12.8194 11.0137 12.1947 11.4461 11.504 11.7448C10.8134 12.0435 10.0705 12.2026 9.31815 12.213C8.5658 12.2025 7.82297 12.0432 7.13241 11.7445C6.44184 11.4458 5.81718 11.0134 5.29437 10.4723C4.77157 9.93116 4.36095 9.29199 4.08614 8.59155C3.81134 7.89111 3.67778 7.14324 3.69315 6.39098Z"/>
</svg>
     );
}
 
export default ProfileIcon;

/* className="w-6 h-6 text-gray-400 hover:text-red-500 active:text-red-500" */