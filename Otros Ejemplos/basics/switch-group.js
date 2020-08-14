switch (day) {
    case 'Monday':
    case 'Tuesday':
    case 'Wednesday':
            console.log('Ungry...');
        break;
    case 'Thursday':
    case 'Friday':
    case 'Saturday':
        console.log('Happy...');
        break;
    case 'Sunday':
            console.log('Yeahhh...');
    default:
            console.log('Day invalid!');
        break;
}