import React from 'react';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import InstaOptions from './InstaOptions';
import InstaSpeed from './InstaSpeed';
import { TagsInput } from "react-tag-input-component";
import { useState, useRef, useEffect } from 'react';

const ReceberProps: React.FC = () => {

    const location = useLocation();
    const textoRecebido = location.state?.texto || "Nenhum texto recebido";
    const userid = location.state?.id || "Nenhum texto recebido";

    const [selectedHashtag, setSelectedHashtag] = useState([]);
    const [selectedLocation, setSelectedLocation] = useState([]);
    const [selectedUsername, setSelectedUsername] = useState([]);
    const [selectedComment, setSelectedComment] = useState([]);


    const [selectedHashtagDisabled, setSelectedHashtagDisabled] = useState([]);
    const [selectedLocationDisabled, setSelectedLocationDisabled] = useState([]);
    const [selectedUsernameDisabled, setSelectedUsernameDisabled] = useState([]);
    const [selectedCommentDisabled, setSelectedCommentDisabled] = useState([]);

    const { t } = useTranslation();

    const [DoLike, setDoLike] = useState(false);
    const [DoFollow, setDoFollow] = useState(false);
    const [DoView, setDoView] = useState(false);
    const [DoUnfollow, setDoUnfollow] = useState(false);
    const [DoFollowBack, setDoFollowBack] = useState(false);
    const [DoDirect, setDoDirect] = useState(false);
    const [DoPost, setDoPost] = useState(false);
    const [DoHashtag, setDoHashtag] = useState(false);
    const [DoLocation, setDoLocation] = useState(false);
    const [DoUsername, setDoUsername] = useState(false);
    const [DoRepost, setDoRepost] = useState(false);
    const [DoComment, setDoComment] = useState(false);



    const ToDo = async (id) => {
        const data = await fetch('http://localhost:3000/api/todoconfig?id=' + id)
        const response = await data.json()
        response.map((item) => {

            setDoLike(item.DoLike)
            setDoFollow(item.DoFollow)
            setDoView(item.DoView)
            setDoUnfollow(item.DoUnfollow)
            setDoFollowBack(item.DoFollowBack)
            setDoDirect(item.DoDirect)
            setDoPost(item.DoPost)
            setDoHashtag(item.DoHashtag)
            setDoLocation(item.DoLocation)
            setDoUsername(item.DoUsername)
            setDoRepost(item.DoRepost)
            setDoComment(item.DoComment)


            setSelectedHashtagDisabled(!item.DoHashtag)
            setSelectedLocationDisabled(!item.DoLocation)
            setSelectedUsernameDisabled(!item.DoUsername)
            setSelectedCommentDisabled(!item.DoComment)
            console.log(item.DoHashtag)


        })
    }

    useEffect(() => {
        ToDo(userid);
    }, []);


    const handleCheckboxChange = (id) => {
        alert(id);
    };



    const options = [];
    options.push({
        name: "Like",
        id: "DoLike",
        status: DoLike
    }, {
        name: "Follow",
        id: "DoFollow",
        status: DoFollow
    }, {
        name: "View",
        id: "DoView",
        status: DoView
    }, {
        name: "Unfollow",
        id: "DoUnfollow",
        status: DoUnfollow
    }, {
        name: "Follow Back",
        id: "DoFollowBack",
        status: DoFollowBack
    }, {
        name: "Direct",
        id: "DoDirect",
        status: DoDirect
    }, {
        name: "Post",
        id: "DoPost",
        status: DoPost
    }, {
        name: "Repost",
        id: "DoRepost",
        status: DoRepost
    });

    const target = [];
    target.push({
        name: "Hashtag",
        id: "DoHashtag",
        status: DoHashtag
    }, {
        name: "Location",
        id: "DoLocation",
        status: DoLocation
    }, {
        name: "Username",
        id: "DoUsername",
        status: DoUsername
    }, {
        name: "Comment",
        id: "DoComment",
        status: DoComment
    });


    const speed = [];
    speed.push({
        name: "Activity Speed",
        options: ["Slow", "Normal", "Fast"]
    }, {
        name: "Likes per Hour",
        options: ["5-10", "10-20", "20-30"]
    }, {
        name: "Comments per Hour",
        options: ["2-4", "4-6", "6-8"]
    }, {
        name: "Follow per Hour",
        options: ["5-10", "10-15", "15-20"]
    }, {
        name: "Delete Media per Hour",
        options: ["2-3", "3-4", "4-5"]
    }, {
        name: "Follow Back per Hour",
        options: ["5-10", "10-15", "15-20"]
    });

    // Recebe variaveis do InstaOptions.tsx para ser utilizado nos campos Hashtag, Location, Username e Comment
    const [var1, setVar1] = useState(0);//hashtag
    const [var2, setVar2] = useState(0);//Location
    const [var3, setVar3] = useState(0);//Username
    const [var4, setVar4] = useState(0);//Comment

    const updateVar1 = (value) => setVar1(value);
    const updateVar2 = (value) => setVar2(value);
    const updateVar3 = (value) => setVar3(value);
    const updateVar4 = (value) => setVar4(value);

    useEffect(() => {
        setSelectedHashtagDisabled(!var1)
        setSelectedLocationDisabled(!var2)
        setSelectedUsernameDisabled(!var3)
        setSelectedCommentDisabled(!var4)
    }, [var1, var2, var3, var4]);

    return (
        <div className="container">
            <ul className="flex space-x-2 rtl:space-x-reverse pb-5">
                <li>
                    <Link to="/instaUsers" className="text-primary hover:underline">
                        {t('Accounts')}
                    </Link>
                </li>
                <li className="before:content-['/'] ltr:before:mr-2 rtl:before:ml-2">
                    <span>Instagram</span>
                </li>
                <li className="before:content-['/'] ltr:before:mr-2 rtl:before:ml-2">
                    <span>{textoRecebido}</span>
                </li>
            </ul>
            <div className="flex gap-5 relative sm:h-[calc(100vh_-_150px)] h-full">
                <div className="panel flex-1 overflow-auto h-full">
                    <div className="sm:min-h-[300px] min-h-[400px] p-5">
                        <div className="grid 2xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 pb-5 gap-8">
                            <img className="w-20 h-20 rounded-full overflow-hidden object-cover" src="/assets/images/profile-12.jpeg" alt="img" />
                        </div>
                        <ul className="font-bold ft titulo text-gray-500 pb-10 pt-0">
                            <li>
                                {t('To Do')}
                            </li>
                        </ul>
                        <div className="grid 2xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 pb-5 gap-8">
                            {options.map((option, index) => (
                                <InstaOptions
                                    key={index}
                                    name={option.name}
                                    userid={userid}
                                    status={option.status}
                                    onChange={() => handleCheckboxChange(targets.id)}
                                    id={option.id}
                                />
                            ))}
                        </div>
                        <ul className="font-bold ft titulo text-gray-500 pb-10 pt-16">
                            <li>
                                {t('Targeting')}
                            </li>
                        </ul>
                        <div className="grid 2xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 pb-5 gap-8">
                            {target.map((targets, indexs) => (
                                <InstaOptions
                                    key={indexs}
                                    name={targets.name}
                                    userid={userid}
                                    status={targets.status}
                                    onUpdateVar1={updateVar1}
                                    onUpdateVar2={updateVar2}
                                    onUpdateVar3={updateVar3}
                                    onUpdateVar4={updateVar4}
                                    onChange={() => handleCheckboxChange(targets.id)}
                                    id={targets.id}
                                />
                            ))}
                        </div>
                        <ul className="font-bold ft titulo text-gray-500 pb-10 pt-16">
                            <li>
                                {t('Hashtags')}
                            </li>
                        </ul>
                        <div>
                            <TagsInput
                                value={selectedHashtag}
                                onChange={setSelectedHashtag}
                                disabled={selectedHashtagDisabled}
                                name="hashtag"
                            />
                        </div>
                        <ul className="font-bold ft titulo text-gray-500 pb-10 pt-16">
                            <li>
                                {t('Locations')}
                            </li>
                        </ul>
                        <div>
                            <TagsInput
                                value={selectedLocation}
                                onChange={setSelectedLocation}
                                disabled={selectedLocationDisabled}
                                name="location"
                            />
                        </div>
                        <ul className="font-bold ft titulo text-gray-500 pb-10 pt-16">
                            <li>
                                {t('Username')}
                            </li>
                        </ul>
                        <div>
                            <TagsInput
                                value={selectedUsername}
                                onChange={setSelectedUsername}
                                disabled={selectedUsernameDisabled}
                                name="Username"
                            />
                        </div>

                        <ul className="font-bold ft titulo text-gray-500 pb-10 pt-16">
                            <li>
                                {t('Comments')}
                            </li>
                        </ul>
                        <div>
                            <TagsInput
                                value={selectedComment}
                                onChange={setSelectedComment}
                                disabled={selectedCommentDisabled}
                                name="comment"
                            />
                        </div>
                        <ul className="font-bold ft titulo text-gray-500 pb-10 pt-16">
                            <li>
                                {t('Speed')}
                            </li>
                        </ul>
                        <div className="grid 2xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 pb-5 gap-8">
                            {speed.map((speeds, indexSpeed) => (
                                <InstaSpeed
                                    key={indexSpeed}
                                    name={speeds.name}
                                    options={speeds.options}
                                />
                            ))}
                        </div>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReceberProps;